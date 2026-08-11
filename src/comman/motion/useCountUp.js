import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const prefersReduced = useReducedMotion();
  
  // Called when the badge enters viewport (via Framer's onViewportEnter)
  const start = () => {
    if (prefersReduced) { 
        setValue(target); 
        return; 
    }
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  return { value, start };
}
