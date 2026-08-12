import { useTransform } from 'framer-motion';

// Given scrollYProgress (0-1) and a step count, returns a MotionValue
// that resolves to the fractional progress representing the active step.
export function useActiveStepIndex(progress, stepCount) {
  const segments = Array.from({ length: stepCount }, (_, i) => i / stepCount);
  const outputs = Array.from({ length: stepCount }, (_, i) => i);
  return useTransform(progress, segments, outputs, { clamp: true });
}
