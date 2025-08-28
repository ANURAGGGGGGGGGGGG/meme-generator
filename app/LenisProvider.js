"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    // Optional: log scroll events
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    return () => {
      // cleanup if needed
      if (lenis) {
        // there's no explicit destroy in lenis v1; rely on GC when not referenced
      }
    };
  }, []);

  return children;
}