"use client"

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

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
                    <p className='text-4xl font-bold dark:text-white hidden lg:block text1 -translate-x-10 opacity-0'>Hi, I&apos;m Reza Bagus Pratama</p>
                    <p className='text-2xl font-bold dark:text-white block lg:hidden text1 -translate-x-10 opacity-0'>Hi, <br /> I&apos;m Reza Bagus Pratama</p>

                    <div className="mb-2 text2 -translate-x-10 opacity-0">
                        <p className='text-4xl lg:text-6xl font-extrabold mb-0 lg:mb-4 dark:text-white'>Front-End Web Developer</p>
                        <p className="dark:text-white text-sm opacity-70">As a web developer, I am also a competitive programmer and tech enthusiast.</p>
                    </div>

                    <div className="grid lg:flex gap-3 font-bold items-center text3 -translate-x-10 opacity-0">
                        <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com" target="_blank"
                            className="bg-darkColor500 dark:bg-white hover:bg-darkColor700 dark:hover:bg-slate-200 transition-colors w-full h-fit py-1 px-3 rounded-md text-left shadow-lg" >
                            <h3 className="opacity text-white dark:text-darkColor500">
                                <strong className="tracking-[4px] opacity-85 text-[10px] uppercase">
                                    Say what you wanna know &#x1F60A;
                                </strong>{" "}
                                <br /> rezzabagus.rb@gmail.com
                            </h3>
                        </Link>

                        <Link href="/static/ResumeCV.pdf" target="_blank"
                            className="bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors text-white uppercase py-2 px-3 w-full rounded-md animate-bounce text-center shadow-lg">
                            Resume
                        </Link>
                    </div>
                </div>

                <div className='relative order-1 lg:order-2'>
                    <div className="w-full lg:absolute -top-[29rem] -right-[8rem] hidden lg:block">
                        <Image src="/static/images/avatar-desktop.png" alt="User" width="672" height="672"></Image>
                    </div>
                    <div className="w-full lg:absolute -top-[29rem] -right-[8rem] block lg:hidden">
                        <Image src="/static/images/avatar-mobile.png" alt="User" width="672" height="672"></Image>
                    </div>
                </div>
            </div>
        </article>
    )
}
