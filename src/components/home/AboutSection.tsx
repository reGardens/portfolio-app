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

        // about animation
        let about = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            }
        });
        about.to(".about div", { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.3 });

        return () => {
            themeObserver.disconnect();
        };
    }, []);

    return (
        <Section id="about" padding="lg" className="overflow-hidden about px-4 sm:px-6">
            <Card padding="lg" className="relative overflow-hidden opacity-0 -translate-y-10 scale-95 transition-all duration-300 ease-out py-12 lg:py-20 rounded-3xl">
                <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                    <OptimizedImage
                        src={isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg"}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="flex flex-col gap-8 lg:gap-12 px-2 sm:px-6 lg:px-12">
                    {/* Title with accent line */}
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-10 sm:h-14 rounded-full bg-traditionalColor500" />
                        <Typography size="4xl" weight="extrabold" className="text-darkColor500 dark:text-white sm:text-5xl lg:text-6xl">{t.about.title}</Typography>
                    </div>

                    {/* Content cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
                            <div className="w-8 h-8 rounded-xl bg-traditionalColor500/20 flex items-center justify-center mb-3">
                                <span className="text-traditionalColor500 text-sm">01</span>
                            </div>
                            <Typography className="text-darkColor500 dark:text-white leading-relaxed">
                                {t.about.paragraph1}
                            </Typography>
                        </div>

                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
                            <div className="w-8 h-8 rounded-xl bg-traditionalColor500/20 flex items-center justify-center mb-3">
                                <span className="text-traditionalColor500 text-sm">02</span>
                            </div>
                            <Typography className="text-darkColor500 dark:text-white leading-relaxed">
                                {t.about.paragraph2}
                            </Typography>
                        </div>

                        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10">
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
        </Section>
    )
}
