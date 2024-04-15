"use client"

import MediaComponentDesktop from "@/app/components/(projects)/mediaComponentDesktop/page";
import MediaComponentTablet from "@/app/components/(projects)/mediaComponentTablet/page";
import MediaComponentMobile from "@/app/components/(projects)/mediaComponentMobile/page";
import Title from "@/app/components/title/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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

export default function DetailProjects({ dataIconFront, dataIconBack, dataIconOther, dataProjects }: Props) {
    useEffect(() => {
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
                            toggleActions: "play none none reverse",
                        }
                    });
                    project.to(box.querySelector(".media"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
                        // .to(box.querySelector(".tablet"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
                        // .to(box.querySelector(".mobile"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
                        .to(box.querySelector(".description"), { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
                }
            })
        } else {
            // mobile view
            const project = gsap.timeline({
                scrollTrigger: {
                    trigger: '.projects',
                    start: "-=100 center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            });
            dataProjects.forEach((res: PorjectsData, index: number) => {
                // console.log(res);
                project.to('.cards', { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
            })
        }
    }, [dataProjects]);

    return (
        <>
            <section id="project" className="px-4 lg:px-24 pt-32 pb-10">
                <div className="mb-10 lg:mb-20">
                    <Title title={'Projects'} darkText={'null'} />
                </div>

                {typeof window !== "undefined" && window.innerWidth > 1024 ? (
                    <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
                        {dataProjects.map((res: PorjectsData, index: number) => {
                            return (
                                <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
                                    <div className="w-full h-full col-start-1 col-span-3 relative media opacity-0 -translate-y-10">
                                        <MediaComponentDesktop url={res.desktopView} name={res.name} />
                                        <MediaComponentTablet name={res.name} url={res.tabletView} />
                                        <MediaComponentMobile name={res.name} url={res.mobileView} />
                                    </div>

                                    <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10 -z-10 ml-3">
                                        <p className="uppercase font-extrabold text-xl tracking-wider">{res.name}</p>
                                        <ul className="mb-3">
                                            {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
                                                return (
                                                    <li key={ress.name} className="inline-block mr-1.5 italic">
                                                        <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">{ress.name}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <p className="font-bold text-lg text-darkColor200 tracking-wider">{res.description}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="block lg:hidden w-full max-w-md bg-white rounded-lg sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
                        <div className="flow-root">
                            <ul role="list" className="relative projects">
                                {dataProjects.map((res: PorjectsData, index: number) => {
                                    return (
                                        <li key={index} className="py-3 sm:py-4 relative">
                                            <div className="flex items-center relative cards opacity-0 -translate-y-10">
                                                <div className="flex-shrink-0 rounded-full !overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
                                                    <Image width={56} height={55} style={{ objectFit: "cover", alignSelf: "center" }} src={res.logo} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4 mr-[10px]">
                                                    <p className="text-xs text-darkColor500 dark:text-white truncate font-semibold opacity-40">
                                                        {res.name}
                                                    </p>
                                                    <p className="text-sm text-darkColor200 dark:text-slate-200 truncate font-semibold">
                                                        {res.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}