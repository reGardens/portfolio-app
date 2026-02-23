"use client"

import Title from "@/components/title/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from 'react';

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
        <section id="skill" className="px-4 lg:px-24 pt-32 pb-10 lg:py-32 skills">
            <div className="mb-10 lg:mb-20">
                <Title title={'Skills'} darkText={'null'} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-3 relative justify-center items-center py-0 lg:py-9 gap-0.5 w-full shadow-2xl rounded-xl overflow-hidden">
                    <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                        <Image src="/static/images/bg-about-black.jpeg" alt="" layout="fill" objectFit="cover"></Image>
                    </div>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 frontend translate-y-10 opacity-0 rounded-t-xl">
                        {dataIconFront?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                </li>
                            )
                        })}
                    </ul>

                    <p id="vertical-front" className="font-bold uppercase col-span-1 text-white ml-[35px] frontend translate-y-10 opacity-0 hidden lg:block">FrontEnd Website</p>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 backend translate-y-10 opacity-0">
                        {dataIconBack?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                </li>
                            )
                        })}
                    </ul>

                    <p id="vertical-front" className="font-bold uppercase col-span-1 text-white ml-[35px] backend translate-y-10 opacity-0 hidden lg:block">BackEnd Website</p>

                    <ul className="col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 other translate-y-10 opacity-0 rounded-b-xl">
                        {dataIconOther?.data?.map((res: IconData, index: number) => {
                            return (
                                <li className="inline-block mx-auto" key={index}>
                                    <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                </li>
                            )
                        })}
                    </ul>

                    <p id="vertical-front" className="font-bold uppercase col-span-1 text-white ml-[35px] other translate-y-10 opacity-0 hidden lg:block">Other</p>
                </div>

                <p className="col-span-1 mx-5 text-darkColor500 dark:text-white text-center font-bold text-2xl detail translate-y-10 opacity-0">&quot;I also have a little understanding of the backend, in addition to the frontend.&quot;</p>
            </div>
        </section>
    )
}
