"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";
import { useLanguage } from "@/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const [isDark, setIsDark] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
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
            <Card padding="lg" className="relative overflow-hidden opacity-0 -translate-y-10 scale-95 transition-all duration-300 ease-out py-12 lg:py-16">
                <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                    <OptimizedImage
                        src={isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg"}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start lg:items-center gap-4 lg:gap-0">
                    <Typography size="4xl" weight="extrabold" className="mb-2 sm:mb-4 lg:mb-0 col-span-1 text-darkColor500 dark:text-white sm:text-5xl">{t.about.title}</Typography>

                    <div className="col-span-2 text-justify mt-0">
                        <Typography className="indent-9 text-darkColor500 dark:text-white">
                            {t.about.paragraph1} <br /><br />
                        </Typography>
                        <Typography className="indent-9 text-darkColor500 dark:text-white">
                            {t.about.paragraph2} <br /><br />
                        </Typography>
                        <Typography className="indent-9 text-darkColor500 dark:text-white">
                            {t.about.paragraph3}
                        </Typography>
                    </div>
                </div>
            </Card>
        </Section>
    )
}
