"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // inertia (0…1)
        duration: 1.2,      // smoothing
        smoothWheel: true,  // smooth mouse wheel
      }}
    >
      {children}
    </ReactLenis>
  );
}
