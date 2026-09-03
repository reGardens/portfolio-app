"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Typography } from '@/components/ui';

interface Props {
    name: string;
    description: string;
    hashtags?: Array<{ name: string; link: string }>;
    desktopView: string | null;
    tabletView: string | null;
    mobileView: string | null;
    index: number;
}

export default function ProjectPinCard({ name, description, hashtags, desktopView, tabletView, mobileView, index }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            gsap.set(
                [
                    `.proj-name-${index}`,
                    `.proj-tags-${index}`,
                    `.proj-desc-${index}`,
                    `.desktop-img-${index}`,
                    `.tablet-img-${index}`,
                    `.mobile-img-${index}`,
                ],
                { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, filter: "blur(0px)" }
            );
            return;
        }

        const hasMedia = !!(desktopView || tabletView || mobileView);

        const ctx = gsap.context(() => {
            if (hasMedia) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=2000",
                        pin: true,
                        scrub: 0.5,
                        anticipatePin: 1,
                    }
                });

                // Text always animates in, regardless of media presence
                tl.fromTo(`.proj-name-${index}`,
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                    0.2
                );
                tl.fromTo(`.proj-tags-${index}`,
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                    0.4
                );
                tl.fromTo(`.proj-desc-${index}`,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                    0.5
                );

                // Desktop scales up
                if (desktopView) {
                    tl.fromTo(`.desktop-img-${index}`,
                        { scale: 1, opacity: 1, filter: "blur(0px)" },
                        { scale: 1.15, opacity: 0.15, filter: "blur(4px)", duration: 1, ease: "power2.inOut" }
                    );
                }

                // Tablet appears in center
                if (tabletView) {
                    tl.fromTo(`.tablet-img-${index}`,
                        { scale: 0.5, opacity: 0, filter: "blur(0px)" },
                        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
                        desktopView ? "-=0.5" : "0"
                    );

                    // Tablet scales up
                    tl.to(`.tablet-img-${index}`,
                        { scale: 1.15, opacity: 0.15, filter: "blur(4px)", duration: 1, ease: "power2.inOut" }
                    );
                }

                // Mobile appears in center
                if (mobileView) {
                    tl.fromTo(`.mobile-img-${index}`,
                        { scale: 0.5, opacity: 0, filter: "blur(0px)" },
                        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
                        "-=0.5"
                    );
                }

                // Hold at end
                tl.to({}, { duration: 0.5 });
            } else {
                // No media at all: no pin/scrub, just a simple text reveal
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                });

                tl.fromTo(`.proj-name-${index}`,
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
                );
                tl.fromTo(`.proj-tags-${index}`,
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                    "-=0.3"
                );
                tl.fromTo(`.proj-desc-${index}`,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                    "-=0.3"
                );
            }

        }, containerRef);

        return () => ctx.revert();
    }, [index, desktopView, tabletView, mobileView]);

    const isImage = (url: string | null) => {
        if (!url) return false;
        return url.endsWith('.png') || url.endsWith('.webp') || url.endsWith('.jpg') || url.endsWith('.jpeg');
    };

    return (
        <div ref={containerRef} className="min-h-screen flex items-center">
            <div className="w-full grid grid-cols-5 gap-8 px-4 lg:px-24">
                {/* Media stack */}
                <div className="col-span-3 relative h-[35rem] flex items-center justify-center">
                    {/* Fallback when no media at all */}
                    {!desktopView && !tabletView && !mobileView && (
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <Image src="/static/default/default-image.png" alt={`${name}`} fill sizes="60vw" className="object-contain opacity-70" />
                        </div>
                    )}

                    {/* Desktop */}
                    {desktopView && (
                        <div className={`desktop-img-${index} absolute inset-0 rounded-xl overflow-hidden`}>
                            {isImage(desktopView) ? (
                                <Image src={desktopView} alt={`${name} desktop`} fill sizes="60vw" className="object-contain" />
                            ) : (
                                <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-contain rounded-xl">
                                    <source src={desktopView} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    )}

                    {/* Tablet */}
                    {tabletView && (
                        <div className={`tablet-img-${index} absolute w-[55%] h-[80%] rounded-xl overflow-hidden z-10`} style={{ opacity: 0 }}>
                            {isImage(tabletView) ? (
                                <Image src={tabletView} alt={`${name} tablet`} fill sizes="35vw" className="object-contain" />
                            ) : (
                                <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-contain rounded-xl">
                                    <source src={tabletView} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    )}

                    {/* Mobile */}
                    {mobileView && (
                        <div className={`mobile-img-${index} absolute w-[25%] h-[70%] rounded-xl overflow-hidden z-20`} style={{ opacity: 0 }}>
                            {isImage(mobileView) ? (
                                <Image src={mobileView} alt={`${name} mobile`} fill sizes="15vw" className="object-contain" />
                            ) : (
                                <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-contain rounded-xl">
                                    <source src={mobileView} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="col-span-2 flex flex-col justify-center">
                    <div className={`proj-name-${index}`} style={{ opacity: 0 }}>
                        <Typography variant="body-l" fontWeight="extrabold" className="tracking-wider text-2xl">
                            {name}
                        </Typography>
                    </div>
                    {Array.isArray(hashtags) && hashtags.length > 0 && (
                        <div className={`proj-tags-${index} flex gap-2 mt-3 mb-4 flex-wrap`} style={{ opacity: 0 }}>
                            {hashtags.map((tag) => (
                                <span key={tag.name} className="text-xs px-3 py-1 rounded-full bg-traditionalColor500/10 text-traditionalColor500 font-semibold">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className={`proj-desc-${index}`} style={{ opacity: 0 }}>
                        <Typography variant="body-m" className="text-darkColor500/70 dark:text-white/70 tracking-wide text-justify leading-relaxed">
                            {description}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
