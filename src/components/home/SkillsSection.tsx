"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";
import { useLanguage } from "@/i18n/LanguageContext";

interface IconData {
    icon: string;
    name: string;
}

interface Props {
    dataIconFront: any;
    dataIconBack: any;
    dataIconOther: any;
}

export default function SkillsSection({ dataIconFront, dataIconBack, dataIconOther }: Props) {
    const { t } = useLanguage();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Skills animation
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            // Desktop: pinned scroll — icons scatter in from random positions
            const skillIcons = gsap.utils.toArray<HTMLElement>(".skill-icon");
            const sections = gsap.utils.toArray<HTMLElement>(".skill-section");

            // Set initial random positions for all icons
            skillIcons.forEach((icon) => {
                gsap.set(icon, {
                    x: gsap.utils.random(-200, 200),
                    y: gsap.utils.random(-150, 150),
                    rotation: gsap.utils.random(-45, 45),
                    scale: 0,
                    opacity: 0,
                });
            });

            const skillTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.skills-pin',
                    start: "top top",
                    end: `+=${sections.length * 600 + 400}`,
                    pin: true,
                    scrub: 0.6,
                    anticipatePin: 1,
                }
            });

            // Title fade in
            skillTl.fromTo(".skills-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            // Each section: label fades in, then icons scatter into place
            sections.forEach((section, i) => {
                const sectionIcons = section.querySelectorAll(".skill-icon");
                const label = section.querySelector(".skill-label");

                // Section container fades in
                skillTl.fromTo(section,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
                );

                // Label
                if (label) {
                    skillTl.fromTo(label,
                        { x: -20, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
                        "-=0.1"
                    );
                }

                // Icons scatter in with stagger
                skillTl.to(sectionIcons, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: "back.out(1.4)",
                    stagger: 0.05,
                }, "-=0.1");
            });

            // Quote
            skillTl.fromTo(".skill-quote",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            skillTl.to({}, { duration: 0.3 });
        } else {
            // Mobile: simple stagger
            const mobileTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.skills-pin',
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            mobileTl.fromTo(".skills-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
            mobileTl.fromTo(".skill-section", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.2 }, "-=0.2");
            mobileTl.fromTo(".skill-icon", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, stagger: 0.03, ease: "back.out(1.2)" }, "-=0.3");
            mobileTl.fromTo(".skill-quote", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
        }

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const skillBg = isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg";

    return (
        <Section id="skill" padding="none" className="skills">
            <div className="skills-pin min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
                    {/* FrontEnd */}
                    <div className="skill-section rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="skill-label uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                FrontEnd
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconFront?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} />
                                        </div>
                                        <span className="text-[10px] text-darkColor500/60 dark:text-white/60 text-center truncate w-full">{res.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* BackEnd */}
                    <div className="skill-section rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="skill-label uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                BackEnd
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconBack?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} />
                                        </div>
                                        <span className="text-[10px] text-darkColor500/60 dark:text-white/60 text-center truncate w-full">{res.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Other */}
                    <div className="skill-section rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="skill-label uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                {t.skills.other}
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconOther?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} />
                                        </div>
                                        <span className="text-[10px] text-darkColor500/60 dark:text-white/60 text-center truncate w-full">{res.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Title + Quote */}
                <div className="col-span-1 flex flex-col justify-center gap-6">
                    <div className="skills-title flex items-center gap-4" style={{ opacity: 0 }}>
                        <div className="w-1 h-10 sm:h-14 rounded-full bg-traditionalColor500" />
                        <Typography size="4xl" weight="extrabold" className="sm:text-5xl lg:text-6xl">{t.skills.title}</Typography>
                    </div>
                    <div className="skill-quote" style={{ opacity: 0 }}>
                        <div className="relative pl-5 border-l-2 border-traditionalColor500">
                            <Typography size="lg" weight="medium" className="sm:text-xl leading-relaxed italic opacity-70">
                                {t.skills.quote}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Section>
    )
}
