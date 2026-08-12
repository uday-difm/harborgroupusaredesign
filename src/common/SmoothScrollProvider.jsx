"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={{
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
      overscroll: false,
      respectReducedMotion: true,
    }}>
      {children}
    </ReactLenis>
  );
}
