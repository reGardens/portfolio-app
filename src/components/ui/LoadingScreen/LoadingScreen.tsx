'use client'

import { useEffect, useRef } from 'react';
import { useLoadingStore } from '@/store/useLoadingStore';
import Image from 'next/image';
import gsap from 'gsap';

export default function LoadingScreen() {
    const isLoading = useLoadingStore((s) => s.isLoading);
    const overlayRef = useRef<HTMLDivElement>(null);
    const prevLoading = useRef(false);

    useEffect(() => {
        const el = overlayRef.current;
        if (!el) return;

        if (isLoading && !prevLoading.current) {
            el.style.display = 'flex';
            gsap.fromTo(el,
                { clipPath: 'circle(0% at 50% 50%)' },
                { clipPath: 'circle(150% at 50% 50%)', duration: 0.6, ease: 'power3.out' }
            );
        } else if (!isLoading && prevLoading.current) {
            gsap.to(el, {
                clipPath: 'circle(0% at 50% 50%)',
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => { el.style.display = 'none'; }
            });
        }

        prevLoading.current = isLoading;
    }, [isLoading]);

    return (
        <div
            ref={overlayRef}
            style={{ display: 'none', clipPath: 'circle(0% at 50% 50%)' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
            <Image
                src="/static/Loading/loading-screen.gif"
                alt="Loading"
                fill
                unoptimized
                priority
                className="object-contain"
            />
        </div>
    );
}
