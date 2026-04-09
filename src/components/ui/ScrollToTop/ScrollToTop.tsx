'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ScrollToTop() {
    const [show, setShow] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const prevShow = useRef(false);
    const bubbleTl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const el = btnRef.current;
        if (!el) return;

        if (show && !prevShow.current) {
            // Bounce in
            gsap.fromTo(el,
                { y: 30, scale: 0.5, opacity: 0 },
                { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.6)" }
            );

            // Start infinite bubble morph
            bubbleTl.current = gsap.timeline({ repeat: -1, yoyo: true });
            bubbleTl.current
                .to(el, { y: -6, borderRadius: "50% 40% 60% 45%", scaleX: 1.05, scaleY: 0.95, duration: 1.2, ease: "sine.inOut" })
                .to(el, { y: 2, borderRadius: "45% 55% 40% 60%", scaleX: 0.95, scaleY: 1.05, duration: 1, ease: "sine.inOut" })
                .to(el, { y: -4, borderRadius: "55% 45% 50% 45%", scaleX: 1.03, scaleY: 0.97, duration: 1.1, ease: "sine.inOut" })
                .to(el, { y: 0, borderRadius: "50%", scaleX: 1, scaleY: 1, duration: 1, ease: "sine.inOut" });

        } else if (!show && prevShow.current) {
            // Stop bubble animation
            bubbleTl.current?.kill();
            bubbleTl.current = null;

            gsap.to(el, {
                y: 20, scale: 0.5, opacity: 0, duration: 0.3, ease: "power2.in",
            });
        }
        prevShow.current = show;
    }, [show]);

    const scrollToTop = () => {
        const el = btnRef.current;
        if (el) {
            gsap.to(el, {
                scale: 0.85, duration: 0.1, ease: "power2.out",
                onComplete: () => {
                    gsap.to(el, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
                }
            });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            ref={btnRef}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-traditionalColor500/90 backdrop-blur-sm text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
