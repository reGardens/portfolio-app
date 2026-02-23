"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

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
    useEffect(() => {
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
    }, []);

    return (
        <Section id="skill" padding="lg" className="skills px-4 sm:px-6">
            <div className="mb-8 sm:mb-10 lg:mb-20">
                <Typography size="4xl" weight="extrabold" className="mb-4 lg:mb-0 sm:text-5xl">Skills</Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 lg:gap-0">
                <Card className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 relative justify-center items-center py-4 lg:py-9 gap-4 lg:gap-0.5 w-full overflow-hidden !bg-transparent !shadow-none" padding="none" shadow={false}>
                    <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                        <OptimizedImage src="/static/images/bg-about-black.jpeg" alt="" layout="fill" objectFit="cover" />
                    </div>

                    <ul className="col-span-1 lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3 sm:gap-5 p-3 sm:p-5 frontend -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out rounded-t-xl">
                        {dataIconFront?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="sm" weight="bold" className="uppercase col-span-1 text-white text-center lg:text-left lg:ml-[35px] px-3 lg:px-0 py-2 lg:py-0 frontend -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out sm:text-base" darkMode={false}>
                        FrontEnd Website
                    </Typography>

                    <ul className="col-span-1 lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3 sm:gap-5 p-3 sm:p-5 backend -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out">
                        {dataIconBack?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="sm" weight="bold" className="uppercase col-span-1 text-white text-center lg:text-left lg:ml-[35px] px-3 lg:px-0 py-2 lg:py-0 backend -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out sm:text-base" darkMode={false}>
                        BackEnd Website
                    </Typography>

                    <ul className="col-span-1 lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3 sm:gap-5 p-3 sm:p-5 other -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out rounded-b-xl">
                        {dataIconOther?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="sm" weight="bold" className="uppercase col-span-1 text-white text-center lg:text-left lg:ml-[35px] px-3 lg:px-0 py-2 lg:py-0 other -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out sm:text-base" darkMode={false}>
                        Other
                    </Typography>
                </Card>

                <Typography size="xl" weight="bold" className="col-span-1 mx-5 text-center detail -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out sm:text-2xl mt-6 lg:mt-0">
                    &quot;I also have a little understanding of the backend, in addition to the frontend.&quot;
                </Typography>
            </div>
        </Section>
    )
}
