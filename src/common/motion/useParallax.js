import { useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

export function useParallax(range = 20) {
  const ref = useRef(null);
  const scrollYProgress = useMotionValue(0);
  const [rect, setRect] = useState(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const updateRect = () => {
      const bounds = ref.current.getBoundingClientRect();
      setRect({
        top: bounds.top + window.scrollY,
        height: bounds.height
      });
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, []);

  useLenis(({ scroll }) => {
    if (!rect || prefersReduced) return;
    const windowHeight = window.innerHeight;
    // 0 = element enters viewport bottom, 1 = element leaves viewport top
    const start = rect.top - windowHeight;
    const end = rect.top + rect.height;
    
    let progress = (scroll - start) / (end - start);
    // Clamp between 0 and 1
    progress = Math.max(0, Math.min(1, progress));
    scrollYProgress.set(progress);
  });

  const raw = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const y = useSpring(raw, { stiffness: 80, damping: 20 });
  return { ref, y: prefersReduced ? 0 : y };
}
