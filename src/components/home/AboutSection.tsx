"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { Section, Card, OptimizedImage, Typography } from "@/components/ui";

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
        about.to(".about div", { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.3 });
    }, []);

    return (
        <Section id="about" padding="lg" className="overflow-hidden about px-4 sm:px-6">
            <Card className="relative overflow-hidden opacity-0 -translate-y-10 scale-95 transition-all duration-300 ease-out">
                <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                    <OptimizedImage src="/static/images/bg-about-white.jpeg" alt="" layout="fill" objectFit="cover" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start lg:items-center gap-4 lg:gap-0">
                    <Typography size="4xl" weight="extrabold" className="mb-2 sm:mb-4 lg:mb-0 col-span-1 !text-darkColor500 sm:text-5xl">About me</Typography>

                    <div className="col-span-2 text-justify mt-0">
                        <Typography className="indent-9">
                            My name is Reza Bagus Pratama. I&apos;m 26 years old and I come from Indonesia, specifically Central Java. I work as a frontend web developer in the IT industry. I have been doing freelance and remote jobs for the past 2 years, as well as working on-site (WFO) projects. <br /><br />
                        </Typography>
                        <Typography className="indent-9">
                            During this time, I have worked on various projects, including developing asset management system applications and POS (Point of Sales) systems, as well as other small-scale applications. <br /><br />
                        </Typography>
                        <Typography className="indent-9">
                            I am excited about expanding my skills and expertise to encompass full-stack development, and I believe my previous experiences have provided me with a solid foundation to excel in this new role.
                        </Typography>
                    </div>
                </div>
            </Card>
        </Section>
    )
}
