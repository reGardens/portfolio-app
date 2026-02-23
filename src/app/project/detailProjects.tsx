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

export default function DetailProjects({ dataProjects }: Props) {
    const router = useRouter();

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

            // let hoverElements = document.querySelectorAll(".animation-hover");
            // hoverElements.forEach(el => {
            // const animationHover = gsap.to(el, {
            // Set the animation to be paused by default
            // translateX: -65,
            // paused: true,
            // })
            // el.addEventListener("mouseenter", (e) => animationHover.play());
            // el.addEventListener("mouseleave", (e) => animationHover.reverse());
            // })
        }
    }, [dataProjects]);

    const handleDetail = (index: number, slug: string, data: PorjectsData) => {
        const card = document.querySelectorAll(".animation-hover")[index];
        if (!card) return;

        gsap.to(card, {
            translateX: -65,
            duration: 1,
            ease: "power2.out"
        });

        // Arahkan setelah delay 2 detik
        setTimeout(() => {
            router.push(`/project/${slug}?data=${encodeURIComponent(JSON.stringify(data))}`);
        }, 800);
    };

    return (
        <>
            <section id="project" className="pl-4 lg:pl-24 pt-32 pb-10">
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
                                    <Typography variant="body-l" fontWeight="extrabold" className="uppercase tracking-wider">{res.name}</Typography>
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
                <div className="block lg:hidden w-full max-w-md bg-white sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
                    <div className="flow-root">
                        <ul role="list" className="relative projects bg-red">
                            {dataProjects.map((res: PorjectsData, index: number) => {
                                return (
                                    <li key={index} className="py-3 sm:py-4 relative border-b-2 border-white border-opacity-5 animation-hover" onClick={() => handleDetail(index, res.slug, res)}>
                                        <div className="flex items-center relative cards opacity-0 -translate-y-10">
                                            <div className="flex-shrink-0 rounded-full overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
                                                <Image width={56} height={55} style={{ objectFit: "cover", alignSelf: "center" }} src={res.logo} alt="Neil image" />
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4 mr-[10px]">
                                                <Typography variant="body-s" className="text-darkColor500 dark:text-white truncate font-semibold opacity-40">
                                                    {res.name}
                                                </Typography>
                                                <Typography variant="body-s" className="text-darkColor200 dark:text-slate-200 truncate font-semibold">
                                                    {res.description}
                                                </Typography>
                                            </div>
                                        </div>
                                        {/* navigation detail icons */}
                                        <div className="bg-traditionalColor500 absolute top-0 left-0 w-full h-full -z-10 translate-x-full grid items-center pl-[5%] pointer">
                                            <Image width={30} height={30} style={{ objectFit: "cover", alignSelf: "center" }} src="/static/icons/next-black.png" alt="Neil image" />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}