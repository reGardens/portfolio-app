"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
    const [isDark, setIsDark] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Check initial theme
        const checkTheme = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };

        checkTheme();

        // Listen for theme changes
        const themeObserver = new MutationObserver(() => {
            checkTheme();
        });

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // About animation
        const cards = gsap.utils.toArray<HTMLElement>(".about-content-card");
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            // Desktop: pinned scroll animation
            const pinTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-pin',
                    start: "top top",
                    end: `+=${cards.length * 400}`,
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                }
            });

            pinTl.fromTo(".about-card",
                { y: 40, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
            );

            pinTl.fromTo(".about-title",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                "-=0.1"
            );

            cards.forEach((card) => {
                pinTl.fromTo(card,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
                    "-=0.1"
                );
            });

            pinTl.to({}, { duration: 0.3 });
        } else {
            // Mobile: simple stagger animation, no pin
            const mobileTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-pin',
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            mobileTl.fromTo(".about-card",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );

            mobileTl.fromTo(".about-title",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                "-=0.2"
            );

            mobileTl.fromTo(".about-content-card",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.15 },
                "-=0.2"
            );
        }

        return () => {
            themeObserver.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <Section id="about" padding="none" className="overflow-hidden about">
            <div className="about-pin min-h-screen flex items-center px-4 sm:px-6">
                <Card padding="lg" className="about-card relative overflow-hidden py-12 lg:py-20 rounded-3xl opacity-0 w-full">
                <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                    <OptimizedImage
                        src={isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-8 lg:gap-12 px-2 sm:px-6 lg:px-12">
                    {/* Title with accent line */}
                    <div className="about-title flex items-center gap-4" style={{ opacity: 0 }}>
                        <div className="w-1 h-10 sm:h-14 rounded-full bg-traditionalColor500" />
                        <Typography size="4xl" weight="extrabold" className="text-darkColor500 dark:text-white sm:text-5xl lg:text-6xl">{t.about.title}</Typography>
                    </div>

                    {/* Content cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="about-content-card bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10" style={{ opacity: 0 }}>
                            <div className="w-8 h-8 rounded-xl bg-traditionalColor500/20 flex items-center justify-center mb-3">
                                <span className="text-traditionalColor500 text-sm">01</span>
                            </div>
                            <Typography className="text-darkColor500 dark:text-white leading-relaxed">
                                {t.about.paragraph1}
                            </Typography>
                        </div>

                        <div className="about-content-card bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10" style={{ opacity: 0 }}>
                            <div className="w-8 h-8 rounded-xl bg-traditionalColor500/20 flex items-center justify-center mb-3">
                                <span className="text-traditionalColor500 text-sm">02</span>
                            </div>
                            <Typography className="text-darkColor500 dark:text-white leading-relaxed">
                                {t.about.paragraph2}
                            </Typography>
                        </div>

                        <div className="about-content-card bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10" style={{ opacity: 0 }}>
                            <div className="w-8 h-8 rounded-xl bg-traditionalColor500/20 flex items-center justify-center mb-3">
                                <span className="text-traditionalColor500 text-sm">03</span>
                            </div>
                            <Typography className="text-darkColor500 dark:text-white leading-relaxed">
                                {t.about.paragraph3}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Card>
            </div>
        </Section>
    )
}
