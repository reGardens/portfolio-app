"use client"

import MediaComponentDesktop from "@/components/(projects)/mediaComponentDesktop/page";
import MediaComponentTablet from "@/components/(projects)/mediaComponentTablet/page";
import MediaComponentMobile from "@/components/(projects)/mediaComponentMobile/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { Section, Card, ProjectCard, ProjectCardDesktop, Button, Typography } from "@/components/ui";

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
    useEffect(() => {
        // projects animation
        if (typeof window !== "undefined" && window.innerWidth > 1024) {
            // desktop view
            dataProjects.forEach((res: PorjectsData, index: number) => {
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
            dataProjects.forEach((res: PorjectsData, index: number) => {
                project.to('.cards', { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 })
            })
        }
    }, [dataProjects]);

    return (
        <Section id="project" className="pt-24 sm:pt-32 pb-10" padding="none">
            <div className="px-4 sm:px-6 lg:px-24 mb-8 sm:mb-10 lg:mb-20">
                <Typography size="4xl" weight="extrabold" className="mb-4 lg:mb-0 sm:text-5xl">Latest Projects</Typography>
            </div>

            {/* Desktop Layout */}
            <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative px-4 sm:px-6 lg:px-24">
                {dataProjects?.map((res: PorjectsData, index: number) => (
                    <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects" data-index={index}>
                        <ProjectCardDesktop
                            name={res.name}
                            description={res.description}
<<<<<<< HEAD
                            hashtags={typeof res.hashtags === 'string' ? [] : res.hashtags}
=======
                            hashtags={Array.isArray(res.hashtags) ? res.hashtags : undefined}
>>>>>>> 2a82f1960301319218fdec360b111d55dd17eba2
                            desktopView={res.desktopView}
                            tabletView={res.tabletView}
                            mobileView={res.mobileView}
                            MediaDesktop={MediaComponentDesktop}
                            MediaTablet={MediaComponentTablet}
                            MediaMobile={MediaComponentMobile}
                        />
                    </li>
                ))}
            </ul>

            {/* Mobile Layout */}
            <Card className="block lg:hidden w-auto mx-4 sm:mx-6 bg-white dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
                <div className="flow-root">
                    <ul role="list" className="relative projects">
                        {dataProjects?.map((res: PorjectsData, index: number) => (
                            <li key={index} className="py-3 sm:py-4 relative">
                                <div className="cards opacity-0 -translate-y-10">
                                    <ProjectCard
                                        name={res.name}
                                        description={res.description}
                                        logo={res.logo}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>

            <div className="flex justify-center">
                <Button href="/project" variant="primary" size="md">
                    Show More
                </Button>
            </div>
        </Section>
    )
}
