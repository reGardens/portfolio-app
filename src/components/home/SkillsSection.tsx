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
        skills.to(".frontend", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
            .to(".backend", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".other", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".detail", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
    }, []);

    return (
        <Section id="skill" padding="lg" className="skills">
            <div className="mb-10 lg:mb-20">
                <Typography size="5xl" weight="extrabold" className="mb-4 lg:mb-0">Skills</Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                <Card className="col-span-2 grid grid-cols-1 lg:grid-cols-3 relative justify-center items-center py-0 lg:py-9 gap-0.5 w-full overflow-hidden" padding="none">
                    <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                        <OptimizedImage src="/static/images/bg-about-black.jpeg" alt="" layout="fill" objectFit="cover" />
                    </div>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 frontend translate-y-10 opacity-0 rounded-t-xl">
                        {dataIconFront?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="base" weight="bold" className="uppercase col-span-1 text-white ml-[35px] frontend translate-y-10 opacity-0 hidden lg:block" darkMode={false}>
                        FrontEnd Website
                    </Typography>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 backend translate-y-10 opacity-0">
                        {dataIconBack?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="base" weight="bold" className="uppercase col-span-1 text-white ml-[35px] backend translate-y-10 opacity-0 hidden lg:block" darkMode={false}>
                        BackEnd Website
                    </Typography>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 other translate-y-10 opacity-0 rounded-b-xl">
                        {dataIconOther?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <OptimizedImage src={res.icon} alt={res.name} width={50} height={50} />
                                </li>
                            )
                        })}
                    </ul>

                    <Typography size="base" weight="bold" className="uppercase col-span-1 text-white ml-[35px] other translate-y-10 opacity-0 hidden lg:block" darkMode={false}>
                        Other
                    </Typography>
                </Card>

                <Typography size="2xl" weight="bold" className="col-span-1 mx-5 text-center detail translate-y-10 opacity-0">
                    &quot;I also have a little understanding of the backend, in addition to the frontend.&quot;
                </Typography>
            </div>
        </Section>
    )
}
