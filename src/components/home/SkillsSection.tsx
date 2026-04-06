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

        // skills animation
        let skills = gsap.timeline({
            scrollTrigger: {
                trigger: '.skills',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            }
        });
        skills.to(".frontend", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 })
            .to(".backend", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2")
            .to(".other", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2")
            .to(".detail", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2");

        return () => { observer.disconnect(); };
    }, []);

    const skillBg = isDark ? "/static/images/bg-about-black.jpeg" : "/static/images/bg-about-white.jpeg";

    return (
        <Section id="skill" padding="lg" className="skills px-4 sm:px-6">
            <div className="flex items-center gap-4 mb-8 sm:mb-10 lg:mb-16">
                <div className="w-1 h-10 sm:h-14 rounded-full bg-traditionalColor500" />
                <Typography size="4xl" weight="extrabold" className="sm:text-5xl lg:text-6xl">{t.skills.title}</Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Skill Cards */}
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
                    {/* FrontEnd */}
                    <div className="frontend -translate-y-10 opacity-0 scale-95 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                FrontEnd
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconFront?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="flex flex-col items-center gap-1.5 group">
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
                    <div className="backend -translate-y-10 opacity-0 scale-95 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                BackEnd
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconBack?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="flex flex-col items-center gap-1.5 group">
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
                    <div className="other -translate-y-10 opacity-0 scale-95 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 -z-[1]">
                            <OptimizedImage src={skillBg} alt="" fill className="object-cover" />
                        </div>
                        <div className="p-5 sm:p-6">
                            <Typography size="xs" weight="bold" className="uppercase text-darkColor500/50 dark:text-white/50 tracking-[3px] mb-4">
                                {t.skills.other}
                            </Typography>
                            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                                {dataIconOther?.data?.map((res: IconData, index: number) => (
                                    <li key={index} className="flex flex-col items-center gap-1.5 group">
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

                {/* Quote */}
                <div className="col-span-1 flex items-center detail -translate-y-10 opacity-0 scale-95">
                    <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-white/10">
                        <div className="text-4xl text-traditionalColor500">&ldquo;</div>
                        <Typography size="xl" weight="bold" className="sm:text-2xl leading-relaxed">
                            {t.skills.quote}
                        </Typography>
                    </div>
                </div>
            </div>
        </Section>
    )
}
