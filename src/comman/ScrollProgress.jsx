"use client";

import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[100] origin-left pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
