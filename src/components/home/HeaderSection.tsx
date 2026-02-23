"use client"

import { gsap } from "gsap";
import { useEffect } from 'react';
import { Button, Typography, OptimizedImage } from "@/components/ui";

export default function HeaderSection() {
    useEffect(() => {
        // header animation
        let title = gsap.timeline();
        title.to(".text3", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
            .to(".text2", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".text1", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
    }, []);

    return (
        <article id="header" className='grid items-center h-full lg:h-[40rem] mt-20 lg:mt-0 relative px-4 lg:px-24 pt-4 lg:pt-24'>
            <div className="grid lg:grid-cols-2 items-center">
                <div className='grid gap-4 order-2 lg:order-1 h-full'>
                    <Typography size="4xl" weight="bold" className="hidden lg:block text1 -translate-x-10 opacity-0">
                        Hi, I&apos;m Reza Bagus Pratama
                    </Typography>
                    <Typography size="2xl" weight="bold" className="block lg:hidden text1 -translate-x-10 opacity-0">
                        Hi, <br /> I&apos;m Reza Bagus Pratama
                    </Typography>

                    <div className="mb-2 text2 -translate-x-10 opacity-0">
                        <Typography size="6xl" weight="extrabold" className="mb-0 lg:mb-4">
                            Front-End Web Developer
                        </Typography>
                        <Typography size="sm" className="opacity-70">
                            As a web developer, I am also a competitive programmer and tech enthusiast.
                        </Typography>
                    </div>

                    <div className="grid lg:flex gap-3 font-bold items-center text3 -translate-x-10 opacity-0">
                        <Button
                            variant="secondary"
                            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com"
                            target="_blank"
                            fullWidth
                            className="h-fit py-1 px-3 text-left"
                        >
                            <h3 className="opacity text-white dark:text-darkColor500">
                                <strong className="tracking-[4px] opacity-85 text-[10px] uppercase">
                                    Say what you wanna know &#x1F60A;
                                </strong>{" "}
                                <br /> rezzabagus.rb@gmail.com
                            </h3>
                        </Button>

                        <Button
                            variant="primary"
                            href="/static/ResumeCV.pdf"
                            target="_blank"
                            fullWidth
                            animate
                            className="uppercase"
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                <div className='relative order-1 lg:order-2'>
                    <div className="w-full lg:absolute -top-[29rem] -right-[8rem] hidden lg:block">
                        <OptimizedImage src="/static/images/avatar-desktop.png" alt="User" width={672} height={672} priority />
                    </div>
                    <div className="w-full lg:absolute -top-[29rem] -right-[8rem] block lg:hidden">
                        <OptimizedImage src="/static/images/avatar-mobile.png" alt="User" width={672} height={672} priority />
                    </div>
                </div>
            </div>
        </article>
    )
}
