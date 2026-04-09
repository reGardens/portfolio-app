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
        const ctx = gsap.context(() => {
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

            // Desktop scales up
            if (desktopView) {
                tl.fromTo(`.desktop-img-${index}`,
                    { scale: 1, opacity: 1 },
                    { scale: 1.15, opacity: 0.6, duration: 1, ease: "power2.inOut" }
                );
            }

            // Tablet appears in center
            if (tabletView) {
                tl.fromTo(`.tablet-img-${index}`,
                    { scale: 0.5, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
                    desktopView ? "-=0.5" : "0"
                );

                // Tablet scales up
                tl.to(`.tablet-img-${index}`,
                    { scale: 1.15, opacity: 0.6, duration: 1, ease: "power2.inOut" }
                );
            }

            // Mobile appears in center
            if (mobileView) {
                tl.fromTo(`.mobile-img-${index}`,
                    { scale: 0.5, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
                    "-=0.5"
                );
            }

            // Hold at end
            tl.to({}, { duration: 0.5 });

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
                    {/* Desktop */}
                    {desktopView && (
                        <div className={`desktop-img-${index} absolute inset-0 rounded-xl overflow-hidden`}>
                            {isImage(desktopView) ? (
                                <Image src={desktopView} alt={`${name} desktop`} fill sizes="60vw" className="object-contain" />
                            ) : (
                                <video autoPlay loop muted className="w-full h-full object-contain rounded-xl">
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
                                <video autoPlay loop muted className="w-full h-full object-contain rounded-xl">
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
                                <video autoPlay loop muted className="w-full h-full object-contain rounded-xl">
                                    <source src={mobileView} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="col-span-2 flex flex-col justify-center">
                    <Typography variant="body-l" fontWeight="extrabold" className="tracking-wider text-2xl">
                        {name}
                    </Typography>
                    {Array.isArray(hashtags) && hashtags.length > 0 && (
                        <div className="flex gap-2 mt-3 mb-4 flex-wrap">
                            {hashtags.map((tag) => (
                                <span key={tag.name} className="text-xs px-3 py-1 rounded-full bg-traditionalColor500/10 text-traditionalColor500 font-semibold">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                    <Typography variant="body-m" className="text-darkColor500/70 dark:text-white/70 tracking-wide text-justify leading-relaxed">
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
