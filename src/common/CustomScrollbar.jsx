"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export default function CustomScrollbar() {
  const lenis = useLenis();
  const trackRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [thumbSize, setThumbSize] = useState(0);

  useEffect(() => {
    const canEnhance =
      typeof window.PointerEvent !== "undefined" &&
      (typeof window.matchMedia !== "function" || window.matchMedia("(pointer: fine)").matches);

    if (!canEnhance) return undefined;

    setIsEnabled(true);
    document.documentElement.classList.add("custom-scrollbar-ready");

    const syncScrollbar = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const scrollLimit = Math.max(0, pageHeight - window.innerHeight);
      setThumbSize(Math.min(1, window.innerHeight / pageHeight));
      setProgress(scrollLimit ? window.scrollY / scrollLimit : 0);
    };

    syncScrollbar();
    const frame = window.requestAnimationFrame(syncScrollbar);
    window.addEventListener("scroll", syncScrollbar, { passive: true });
    window.addEventListener("resize", syncScrollbar);
    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(syncScrollbar)
      : null;
    observer?.observe(document.documentElement);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncScrollbar);
      window.removeEventListener("resize", syncScrollbar);
      observer?.disconnect();
      document.documentElement.classList.remove("custom-scrollbar-ready");
    };
  }, []);

  const scrollToPointer = (clientY, dragOffset = 0) => {
    const track = trackRef.current;
    if (!track) return;

    const { top, height } = track.getBoundingClientRect();
    const thumbHeight = Math.max(5, thumbSize * 100) / 100 * height;
    const nextProgress = Math.min(
      1,
      Math.max(0, (clientY - top - dragOffset) / Math.max(1, height - thumbHeight))
    );
    const scrollLimit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (lenis) {
      lenis.scrollTo(nextProgress * lenis.limit, { immediate: true });
    } else {
      window.scrollTo({ top: nextProgress * scrollLimit, behavior: "auto" });
    }
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    const track = trackRef.current;
    const thumb = event.target instanceof Element
      ? event.target.closest(".custom-scrollbar-thumb")
      : null;
    const { top, height } = track.getBoundingClientRect();
    const thumbHeight = Math.max(5, thumbSize * 100) / 100 * height;
    const currentThumbTop = progress * (height - thumbHeight);
    dragOffsetRef.current = thumb
      ? event.clientY - top - currentThumbTop
      : thumbHeight / 2;

    scrollToPointer(event.clientY, dragOffsetRef.current);
    track.setPointerCapture?.(event.pointerId);

    const handlePointerMove = (moveEvent) => scrollToPointer(moveEvent.clientY, dragOffsetRef.current);
    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  if (!isEnabled || thumbSize >= 1) return null;

  const thumbHeight = Math.max(5, thumbSize * 100);
  const thumbTop = progress * (100 - thumbHeight);

  return (
    <div
      ref={trackRef}
      aria-label="Page scroll position"
      className="custom-scrollbar-track"
      onPointerDown={handlePointerDown}
    >
      <div
        className="custom-scrollbar-thumb"
        style={{ height: `${thumbHeight}%`, top: `${thumbTop}%` }}
      />
    </div>
  );
}
