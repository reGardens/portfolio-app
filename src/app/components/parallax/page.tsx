"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function HomeTitle() {
    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(".text3", { x: 0, duration: 2, ease: "power1.out", opacity: 1 })
            .to(".text2", { x: 0, duration: 2, ease: "power1.out", opacity: 1}, "-=1")
            .to(".text1", { x: 0, duration: 2, ease: "power1.out", opacity: 1}, "-=1");
    }, []);

    return (
        <div className='grid gap-4 order-2 md:order-1'>
            <p className='text-4xl font-bold dark:text-white hidden md:block text1 -translate-x-full opacity-0'>Hi, I&apos;m Reza Bagus Pratama</p>
            <p className='text-2xl font-bold dark:text-white block md:hidden text1 -translate-x-full opacity-0'>Hi, <br /> I&apos;m Reza Bagus Pratama</p>

            <div className="mb-2 text2 -translate-x-full opacity-0">
                <p className='text-4xl md:text-6xl font-extrabold mb-0 md:mb-4 dark:text-white'>Front-End Web Developer</p>
                <p className="dark:text-white text-sm opacity-70">As a web developer, I am also a competitive programmer and tech enthusiast.</p>
            </div>

            <div className="grid md:flex gap-3 font-bold items-center text3 -translate-x-full opacity-0">
                <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rezzabagus.rb@gmail.com" target="_blank"
                    className="bg-darkColor500 dark:bg-white hover:bg-darkColor700 dark:hover:bg-slate-200 transition-colors w-full h-fit py-1 px-3 rounded-md text-left shadow-lg" >
                    <h3 className="opacity text-white dark:text-darkColor500">
                        <strong className="tracking-[4px] opacity-85 text-[10px]">
                            CLICK TO SEND EMAIL
                        </strong>{" "}
                        <br /> rezzabagus.rb@gmail.com
                    </h3>
                </a>

                <a href="https://drive.google.com/uc?export=download&id=1b6aiPsC2rgC1b9dSGY4WhGiZDzmlxlIK" target="_blank"
                    className="bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors text-white uppercase py-2 px-3 w-full rounded-md animate-bounce text-center shadow-lg">
                    Resume
                </a>
            </div>
        </div>
    )
}