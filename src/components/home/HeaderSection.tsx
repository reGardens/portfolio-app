"use client"

import { gsap } from "gsap";
import { useEffect } from 'react';
import { Button, Typography, OptimizedImage } from "@/components/ui";

export default function HeaderSection() {
    useEffect(() => {
        // header animation
        let title = gsap.timeline();
        title.to(".text3", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 })
            .to(".text2", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2")
            .to(".text1", { y: 0, scale: 1, duration: 0.3, ease: "power2.out", opacity: 1 }, "-=0.2");
    }, []);

    return (
        <article id="header" className='grid items-center min-h-screen lg:h-[40rem] mt-16 lg:mt-0 relative px-4 sm:px-6 lg:px-24 pt-4 lg:pt-24'>
            <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-0">
                <div className='grid gap-4 sm:gap-6 order-2 lg:order-1 h-full'>
                    <Typography size="4xl" weight="bold" className="hidden lg:block text1 -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out">
                        Hi, I&apos;m Reza Bagus Pratama
                    </Typography>
                    <Typography size="3xl" weight="bold" className="block lg:hidden text1 -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out">
                        Hi, I&apos;m Reza Bagus Pratama
                    </Typography>

                    <div className="mb-4 sm:mb-6 text2 -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out">
                        <Typography size="4xl" weight="extrabold" className="mb-2 sm:mb-3 lg:mb-4 lg:text-6xl">
                            Front-End Web Developer
                        </Typography>
                        <Typography size="sm" className="opacity-70 sm:text-base">
                            As a web developer, I am also a competitive programmer and tech enthusiast.
                        </Typography>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:flex gap-3 sm:gap-4 font-bold items-center text3 -translate-y-10 opacity-0 scale-95 transition-all duration-300 ease-out">
                        <Button
                            variant="secondary"
                            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com"
                            target="_blank"
                            fullWidth
                            className="h-fit py-1 px-3 text-left"
                        >
                            <Typography variant="body-m" className="text-white dark:text-darkColor500">
                                <strong className="tracking-[4px] text-[10px] uppercase text-white dark:text-darkColor500">
                                    Say what you wanna know &#x1F60A;
                                </strong>{" "}
                                <br /> <span className="text-white dark:text-darkColor500">rezzabagus.rb@gmail.com</span>
                            </Typography>
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

                <div className='relative order-1 lg:order-2 flex justify-center lg:block'>
                    <div className="w-full lg:absolute -top-[24rem] -right-[8rem] hidden lg:block">
                        <OptimizedImage src="/static/images/user-image.png" alt="User" width={672} height={672} priority />
                    </div>
                    <div className="w-3/4 max-w-sm sm:w-1/2 sm:max-w-md block lg:hidden">
                        <OptimizedImage src="/static/images/user-image.png" alt="User" width={672} height={672} priority />
                    </div>
                </div>
            </div>
        </article>
    )
}
