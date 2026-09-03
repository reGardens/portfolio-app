'use client'

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        // Expose globally so route changes can reset scroll position.
        (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
            lenis.destroy();
        };
    }, []);

    return null;
}
