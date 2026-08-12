import { useMotionValue, useSpring } from 'framer-motion';
import { useLenis } from 'lenis/react';

export function useVelocityEffect(maxSkew = 2, maxBlur = 2) {
  const skew = useMotionValue(0);
  const blur = useMotionValue(0);

  const springSkew = useSpring(skew, { stiffness: 400, damping: 40 });
  const springBlur = useSpring(blur, { stiffness: 400, damping: 40 });

  useLenis(({ velocity }) => {
    // Velocity is usually between -50 and 50 during normal scroll
    const normalizedVelocity = Math.min(Math.max(velocity / 30, -1), 1);
    
    skew.set(normalizedVelocity * maxSkew);
    blur.set(Math.abs(normalizedVelocity) * maxBlur);
  });

  return { skew: springSkew, blur: springBlur };
}
