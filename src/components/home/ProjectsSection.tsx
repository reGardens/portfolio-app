"use client"

import MediaComponentDesktop from "@/components/(projects)/mediaComponentDesktop/page";
import MediaComponentTablet from "@/components/(projects)/mediaComponentTablet/page";
import MediaComponentMobile from "@/components/(projects)/mediaComponentMobile/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Image from "next/image";
import { Section, Button, Typography } from "@/components/ui";
import { useLanguage } from "@/i18n/LanguageContext";
import ProjectPinCard from "./ProjectPinCard";

gsap.registerPlugin(ScrollTrigger);

interface PorjectsData {
    name: string;
    description: string;
    projectBackground: string;
    desktopView: string;
    tabletView: string;
    mobileView: string;
    hashtags: string | Array<{ name: string; link: string }>;
    logo: string;
}

interface Hashtags {
    name: string;
    link: string;
}

interface Props {
    dataProjects: any;
}

export default function ProjectsSection({ dataProjects }: Props) {
    const { t } = useLanguage();
    const limitedProjects = dataProjects?.slice(0, 5);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // projects animation
        if (typeof window !== "undefined" && window.innerWidth > 1024) {
            // desktop view
            limitedProjects.forEach((res: PorjectsData, index: number) => {
                const box = document.querySelector(`.projects:nth-child(${index + 1})`);
                if (box) {
                    const project = gsap.timeline({
                        scrollTrigger: {
                            trigger: box,
                            start: "top center",
                            end: "bottom center",
                            toggleActions: "play none none none",
                        }
                    });
                    project.to(box.querySelector(".media"), { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 })
                        .to(box.querySelector(".description"), { x: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2");
                }
            })
        } else {
            // mobile view
            const project = gsap.timeline({
                scrollTrigger: {
                    trigger: '.projects',
                    start: "-=100 center",
                    end: "bottom center",
                    toggleActions: "play none none none",
                }
            });
            limitedProjects.forEach((res: PorjectsData, index: number) => {
                project.to('.cards', { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 })
            })
        }
    }, [limitedProjects]);

    return (
        <Section id="project" className="pt-24 sm:pt-32 pb-10" padding="none">
            <div className="px-4 sm:px-6 lg:px-24 mb-0 sm:mb-10 lg:mb-0">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-10 sm:h-14 rounded-full bg-traditionalColor500" />
                    <Typography size="4xl" weight="extrabold" className="sm:text-5xl lg:text-6xl">{t.projects.title}</Typography>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block text-darkColor500 dark:text-white">
                {limitedProjects?.map((res: PorjectsData, index: number) => (
                    <ProjectPinCard
                        key={index}
                        name={res.name}
                        description={res.description}
                        hashtags={Array.isArray(res.hashtags) ? res.hashtags : undefined}
                        desktopView={res.desktopView}
                        tabletView={res.tabletView}
                        mobileView={res.mobileView}
                        index={index}
                    />
                ))}
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden px-4 sm:px-6 mb-10">
                <ul role="list" className="relative projects flex flex-col gap-4">
                    {limitedProjects?.map((res: PorjectsData, index: number) => (
                        <li key={index}>
                            <div className="cards opacity-0 -translate-y-10 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 overflow-hidden">
                                <div className="p-4 flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/10 flex items-center justify-center overflow-hidden">
                                        <Image src={res.logo} alt={res.name} width={32} height={32} className="object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <Typography variant="body-s" fontWeight="bold" className="text-darkColor500 dark:text-white truncate">
                                            {res.name}
                                        </Typography>
                                        <Typography variant="body-s" className="text-darkColor500/50 dark:text-white/50 truncate text-xs mt-0.5">
                                            {res.description}
                                        </Typography>
                                        {Array.isArray(res.hashtags) && (
                                            <div className="flex gap-1.5 mt-2 flex-wrap">
                                                {res.hashtags.map((tag: Hashtags) => (
                                                    <span key={tag.name} className="text-[10px] px-2 py-0.5 rounded-full bg-traditionalColor500/10 text-traditionalColor500 font-medium">
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center">
                <Button href="/project" variant="primary" size="md">
                    Show More
                </Button>
            </div>
        </Section>
    )
}
