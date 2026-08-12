import { useRef, useCallback, useState, useEffect } from 'react';
import { useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export function useTilt(maxDeg = 6) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (prefersReduced || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * maxDeg * 2);
    rotateX.set(-y * maxDeg * 2);
  }, [prefersReduced, isTouch, maxDeg, rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return {
    ref,
    style: { rotateX: springRotX, rotateY: springRotY, transformPerspective: 800 },
    handleMouseMove, 
    handleMouseLeave
  };
}
