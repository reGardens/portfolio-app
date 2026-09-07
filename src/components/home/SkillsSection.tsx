"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";
import { useLanguage } from "@/i18n/LanguageContext";
import { useThemeStore } from "@/store/useThemeStore";
import type { SkillGroup, SkillIcon } from "@/types/project";

interface Props {
    dataIconFront: SkillGroup;
    dataIconBack: SkillGroup;
    dataIconOther: SkillGroup;
    dataIconMobile: SkillGroup;
}

// Monochrome icons (solid single-color, e.g. black) that are invisible in dark mode.
// Loaded via next/image so currentColor doesn't apply; invert them via CSS in dark mode.
// Easily extendable: add more filename keywords here as needed.
const MONO_ICONS = ['shadcn'];
const isMonoIcon = (icon: string) => MONO_ICONS.some((k) => icon.toLowerCase().includes(k));

export default function SkillsSection({ dataIconFront, dataIconBack, dataIconOther, dataIconMobile }: Props) {
    const { t } = useLanguage();
    const isDark = useThemeStore((s) => s.isDark);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            gsap.set([".skills-title", ".skill-quote", ".skill-section", ".skill-icon"], { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotation: 0 });
            return;
        }

        // Skills animation
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            // Desktop: lock scroll when the section reaches the top of the viewport,
            // then run a TIME-BASED scatter-in animation (no scrub). Unlock when done.
            const skillIcons = gsap.utils.toArray<HTMLElement>(".skill-icon");
            const sections = gsap.utils.toArray<HTMLElement>(".skill-section");

            // Set initial random positions for all icons (scatter effect preserved)
            skillIcons.forEach((icon) => {
                gsap.set(icon, {
                    x: gsap.utils.random(-200, 200),
                    y: gsap.utils.random(-150, 150),
                    rotation: gsap.utils.random(-45, 45),
                    scale: 0,
                    opacity: 0,
                });
            });

            // Reference to the Lenis smooth-scroll instance (exposed on window).
            const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

            // Helper to fully release the scroll lock (native + Lenis).
            const releaseLock = () => {
                document.body.style.overflow = "";
                lenis?.start();
            };

            // Time-based timeline (NO scrub): plays on its own once triggered.
            const skillTl = gsap.timeline({
                paused: true,
                onComplete: () => {
                    releaseLock();
                },
            });

            // Title fade in
            skillTl.fromTo(".skills-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            // All groups appear together: fade every section + label at the same time,
            // then scatter all icons in at once (with a light stagger for polish).
            skillTl.fromTo(".skill-section",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
                "-=0.1"
            );

            skillTl.fromTo(".skill-label",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                "<"
            );

            // Icons scatter into place — all sections simultaneously
            skillTl.to(".skill-icon", {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.4)",
                stagger: 0.02,
            }, "<");

            // Quote
            skillTl.fromTo(".skill-quote",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                "-=0.2"
            );

            // Lock scroll as soon as the section reaches the top of the viewport,
            // then play the time-based animation. Lock is released on timeline complete.
            ScrollTrigger.create({
                trigger: ".skills-pin",
                start: "top top",
                once: true,
                onEnter: () => {
                    // Lock both Lenis (smooth scroll) and native scrolling for reliability.
                    lenis?.stop();
                    document.body.style.overflow = "hidden";
                    skillTl.play(0);
                },
            });
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
            ScrollTrigger.getAll().forEach(t => t.kill());
            // Ensure scroll is never left locked on unmount / HMR.
            document.body.style.overflow = "";
            const lenis = (window as unknown as { __lenis?: { start: () => void } }).__lenis;
            lenis?.start();
        };
    }, []);

    const skillBg = isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg";

    return (
        <Section id="skill" padding="none" className="skills pt-16 lg:pt-0">
            <div className="skills-pin min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-40 lg:pt-48 pb-24 lg:pb-28">
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
                                {dataIconFront?.data?.map((res: SkillIcon, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} className={isMonoIcon(res.icon) ? "dark:invert" : undefined} />
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
                                {dataIconBack?.data?.map((res: SkillIcon, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} className={isMonoIcon(res.icon) ? "dark:invert" : undefined} />
                                        </div>
                                        <span className="text-[10px] text-darkColor500/60 dark:text-white/60 text-center truncate w-full">{res.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="skill-section rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="skill-label uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                Mobile
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconMobile?.data?.map((res: SkillIcon, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} className={isMonoIcon(res.icon) ? "dark:invert" : undefined} />
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
                                {dataIconOther?.data?.map((res: SkillIcon, index: number) => (
                                    <li key={index} className="skill-icon flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
                                            <OptimizedImage src={res.icon} alt={res.name} width={32} height={32} className={isMonoIcon(res.icon) ? "dark:invert" : undefined} />
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
