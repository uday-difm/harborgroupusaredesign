"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    const hasVisited = sessionStorage.getItem("harbor_preloader_shown");
    if (!hasVisited) {
      setShow(true);
      sessionStorage.setItem("harbor_preloader_shown", "true");
      // Hide after short duration
      setTimeout(() => setShow(false), 800);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Logo.png"
              alt="Harbor Group USA"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
