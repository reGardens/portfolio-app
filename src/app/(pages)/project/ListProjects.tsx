"use client"

import MediaComponentDesktop from "@/components/(projects)/mediaComponentDesktop/page";
import MediaComponentTablet from "@/components/(projects)/mediaComponentTablet/page";
import MediaComponentMobile from "@/components/(projects)/mediaComponentMobile/page";
import { Typography } from "@/components/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLoadingStore } from '@/store/useLoadingStore';

interface Props {
    dataIconFront: any;
    dataIconBack: any;
    dataIconOther: any;
    dataProjects: any;
}
interface IconData {
    icon: string;
    name: string;
}
interface PorjectsData {
    name: string;
    slug: string;
    description: string;
    projectBackground: string;
    desktopView: string;
    tabletView: string;
    mobileView: string;
    hashtags: string;
    logo: string;
}
interface Hashtags {
    name: string;
    link: string;
}

export default function ListProjects({ dataProjects }: Props) {
    const router = useRouter();
    const setLoading = useLoadingStore((s) => s.setLoading);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof window !== "undefined" && window.innerWidth > 1024) {
            // desktop view
            dataProjects.forEach((res: PorjectsData, index: number) => {
                // console.log('box);
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

    const handleDetail = (index: number, slug: string, data: PorjectsData) => {
        const card = document.querySelectorAll(".animation-hover")[index] as HTMLElement;
        if (!card) return;

        // iOS-style: scale down + highlight
        gsap.to(card, {
            scale: 0.95,
            opacity: 0.7,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(card, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });

        setTimeout(() => {
            setLoading(true);
            router.push(`/project/${slug}?data=${encodeURIComponent(JSON.stringify(data))}`);
        }, 350);
    };

    return (
        <>
            <section id="project" className="px-4 lg:px-24 pt-44 md:pt-32 pb-10">
                <button
                    onClick={() => { setLoading(true); router.push('/home'); }}
                    className="flex md:hidden items-center gap-2 mb-6 text-darkColor500 dark:text-white hover:text-traditionalColor500 dark:hover:text-traditionalColor500 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-semibold text-sm">Back</span>
                </button>

                {/* Desktop Layout */}
                <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
                    {dataProjects.map((res: PorjectsData, index: number) => {
                        return (
                            <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
                                <div className="w-full h-full col-start-1 col-span-3 relative media opacity-0 -translate-y-10 scale-95 transition-all duration-300 ease-out">
                                    <MediaComponentDesktop url={res.desktopView} name={res.name} />
                                    <MediaComponentTablet name={res.name} url={res.tabletView} />
                                    <MediaComponentMobile name={res.name} url={res.mobileView} />
                                </div>

                                <div className="col-span-2 col-start-4 mt-10 description opacity-0 translate-x-10 scale-95 transition-all duration-300 ease-out -z-10 ml-3">
                                    <Typography variant="body-l" fontWeight="extrabold" className="tracking-wider">{res.name}</Typography>
                                    <ul className="mb-3">
                                        {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
                                            return (
                                                <li key={ress.name} className="inline-block mr-1.5 italic">
                                                    <Typography variant="body-s" fontWeight="extrabold" className="leading-none text-darkColor500 dark:text-white opacity-50 tracking-wider">{ress.name}</Typography>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <Typography variant="body-m" fontWeight="bold" className="text-darkColor200 tracking-wider text-justify">{res.description}</Typography>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile Layout */}
                <div className="block lg:hidden w-full mb-10">
                    <ul role="list" className="relative projects flex flex-col gap-3">
                        {dataProjects.map((res: PorjectsData, index: number) => {
                            return (
                                <li
                                    key={index}
                                    className="rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl shadow-sm border border-white/20 dark:border-white/10 px-4 py-3.5 active:bg-black/5 dark:active:bg-white/5 transition-colors animation-hover cursor-pointer"
                                    onClick={() => handleDetail(index, res.slug, res)}
                                >
                                    <div className="flex items-center cards opacity-0 -translate-y-10">
                                        <div className="flex-shrink-0 rounded-xl overflow-hidden h-11 w-11 bg-gray-100 dark:bg-white/10 grid place-items-center">
                                            <Image width={44} height={44} style={{ objectFit: "cover" }} src={res.logo} alt={res.name} />
                                        </div>
                                        <div className="flex-1 min-w-0 ml-3">
                                            <Typography variant="body-s" className="text-darkColor500 dark:text-white truncate font-semibold">
                                                {res.name}
                                            </Typography>
                                            <Typography variant="body-s" className="text-darkColor500/50 dark:text-white/50 truncate text-xs">
                                                {res.description}
                                            </Typography>
                                        </div>
                                        <svg className="w-4 h-4 text-gray-400 dark:text-white/30 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}