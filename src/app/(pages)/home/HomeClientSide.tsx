"use client"

import Title from "@/app/components/title/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    dataIcons: any[];
}

export default function HomeClientSide(dataIcons: Props) {
    useEffect(() => {
        // header
        let title = gsap.timeline();
        title.to(".text3", { x: 0, duration: 2, ease: "back.out(1.1)", opacity: 1 })
            .to(".text2", { x: 0, duration: 2, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".text1", { x: 0, duration: 2, ease: "back.out(1.1)", opacity: 1 }, "-=1");
        // ------

        // about
        let about = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        });
        about.to(".about div", { y: 0, opacity: 1, ease: "back.out(1.1)", duration: 1.1 });
        // ------
    }, []);

    return (
        <>
            <article className='grid items-center h-full lg:h-[40rem] mt-20 lg:mt-0 relative px-4 lg:px-24 pt-4 lg:pt-24'>
                <div className="grid lg:grid-cols-2 items-center">
                    <div className='grid gap-4 order-2 lg:order-1 h-full'>
                        <p className='text-4xl font-bold dark:text-white hidden lg:block text1 -translate-x-full opacity-0'>Hi, I&apos;m Reza Bagus Pratama</p>
                        <p className='text-2xl font-bold dark:text-white block lg:hidden text1 -translate-x-full opacity-0'>Hi, <br /> I&apos;m Reza Bagus Pratama</p>

                        <div className="mb-2 text2 -translate-x-full opacity-0">
                            <p className='text-4xl lg:text-6xl font-extrabold mb-0 lg:mb-4 dark:text-white'>Front-End Web Developer</p>
                            <p className="dark:text-white text-sm opacity-70">As a web developer, I am also a competitive programmer and tech enthusiast.</p>
                        </div>

                        <div className="grid lg:flex gap-3 font-bold items-center text3 -translate-x-full opacity-0">
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

                    <div className='relative order-1 lg:order-2'>
                        <div className="w-full lg:absolute -top-[29rem] -right-[8rem] hidden lg:block">
                            <img src="/static/images/avatar-desktop.png" alt="User" className='mx-auto w-[42rem]' />
                        </div>
                        <div className="w-full lg:absolute -top-[29rem] -right-[8rem] block lg:hidden">
                            <img src="/static/images/avatar-mobile.png" alt="User" className='mx-auto w-[42rem]' />
                        </div>
                    </div>
                </div>
            </article>

            <section className='px-4 lg:px-24 py-24 overflow-hidden about'>
                <div className="relative shadow-2xl rounded-xl overflow-hidden opacity-0 translate-y-full">
                    <div id='bg-about-white' className="w-full h-full absolute top-0 left-0 -z-[1]">
                        <img src="/static/images/bg-about-white.jpeg" alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center p-4 lg:p-24">
                        <Title name={'About me'} darkText={'dark:!text-darkColor500'} />

                        <div className="col-span-2">
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

            <section className="px-4 lg:px-24 py-24">
                <Title name={'Skills'} darkText={'null'} />

                <div className="grid grid-cols-3 relative">
                    <p id="vertical-front" className="font-bold uppercase">Front End Website</p>

                    <ul>
                        {dataIcons.dataIcons.data.map((res: string, index: number) => {
                            return (
                                <li key={index}>
                                    <img src={res.icon} alt={res.name} srcSet="" />
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </section>
        </>
    )
}