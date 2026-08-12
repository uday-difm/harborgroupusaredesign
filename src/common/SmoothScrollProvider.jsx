"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root options={{
      lerp: 0.07,        // linear interpolation (smoothness)
      duration: 1.2,     // scroll duration
      smoothWheel: true, // enable smooth wheel scrolling
      smoothTouch: false, // touch screens already have native momentum
    }}>
      {children}
    </ReactLenis>
  );
}
