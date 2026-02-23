"use client"

import Title from "@/components/title/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    useEffect(() => {
        // about animation
        let about = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
            }
        });
        about.to(".about div", { y: 0, opacity: 1, ease: "back.out(1.1)", duration: 1.8 });
    }, []);

    return (
        <section id="about" className='px-4 lg:px-24 pt-32 bg-red pb-10 lg:py-32 overflow-hidden about'>
            <div className="relative shadow-2xl rounded-xl overflow-hidden opacity-0 translate-y-10">
                <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                    <Image src="/static/images/bg-about-white.jpeg" alt="" layout="fill" objectFit="cover"></Image>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center p-4 lg:p-24">
                    <Title title={'About me'} darkText={'dark:!text-darkColor500'} />

                    <div className="col-span-2 text-justify lg:text-left mt-2 lg:mt-0">
                        <p className="indent-9">
                            My name is Reza Bagus Pratama. I&apos;m 26 years old and I come from Indonesia, specifically Central Java. I work as a frontend web developer in the IT industry. I have been doing freelance and remote jobs for the past 2 years, as well as working on-site (WFO) projects. <br /><br />
                        </p>
                        <p className="indent-9">
                            During this time, I have worked on various projects, including developing asset management system applications and POS (Point of Sales) systems, as well as other small-scale applications. <br /><br />
                        </p>
                        <p className="indent-9">
                            I am excited about expanding my skills and expertise to encompass full-stack development, and I believe my previous experiences have provided me with a solid foundation to excel in this new role.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
