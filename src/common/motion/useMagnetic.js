import { useRef, useCallback, useEffect, useState } from 'react';
import { useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export function useMagnetic(strength = 0.4, radius = 40) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch(typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (prefersReduced || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX ** 2 + distY ** 2);
    if (dist < radius) {
      x.set(distX * strength);
      y.set(distY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [prefersReduced, isTouch, strength, radius, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}
