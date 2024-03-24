"use client"

import MediaComponentDesktop from "@/app/components/(projects)/mediaComponentDesktop/page";
import MediaComponentTablet from "@/app/components/(projects)/mediaComponentMobile/page";
import MediaComponentMobile from "@/app/components/(projects)/mediaComponentTablet/page";
import Title from "@/app/components/title/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
    dataIconFront: any;
    dataIconBack: any;
    dataIconOther: any;
    dataProjects: any;
}
interface IconData {
    icon: string;
    name: string;
}
interface PorjectsData {
    name: string;
    description: string;
    projectBackground: string;
    desktopView: string;
    tabletView: string;
    mobileView: string;
    hashtags: string;
    logo: string;
}
interface Hashtags {
    name: string;
    link: string;
}

// const imageLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export default function HomeClientSide({ dataIconFront, dataIconBack, dataIconOther, dataProjects }: Props) {
    useEffect(() => {
        // header
        let title = gsap.timeline();
        title.to(".text3", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
            .to(".text2", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".text1", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
        // ------

        // about
        let about = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        });
        about.to(".about div", { y: 0, opacity: 1, ease: "back.out(1.1)", duration: 1.8 });
        // ------

        // skills
        let skills = gsap.timeline({
            scrollTrigger: {
                trigger: '.skills',
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        });
        skills.to(".frontend", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
            .to(".backend", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".other", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
            .to(".detail", { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
        // ------

        // projects
        if (typeof window !== "undefined" && window.innerWidth > 1024) {
            // desktop view
            dataProjects.forEach((res: PorjectsData, index: number) => {
                // console.log('box);
                const box = document.querySelector(`.projects:nth-child(${index + 1})`);
                if (box) {
                    const project = gsap.timeline({
                        scrollTrigger: {
                            trigger: box,
                            start: "top center",
                            end: "bottom center",
                            toggleActions: "play none none reverse",
                        }
                    });
                    project.to(box.querySelector(".desktop"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 })
                        .to(box.querySelector(".tablet"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
                        .to(box.querySelector(".mobile"), { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1")
                        .to(box.querySelector(".description"), { x: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 }, "-=1");
                }
            })
        } else {
            // mobile view
            const project = gsap.timeline({
                scrollTrigger: {
                    trigger: '.projects',
                    start: "-=100 center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            });
            dataProjects.forEach((res: PorjectsData, index: number) => {
                // console.log(res);
                project.to('.wrapperCard', { y: 0, duration: 2, ease: "back.out(1.1)", opacity: 1 })
                    .to('.cards', { y: 0, duration: 2, ease: "back.out(1.1)", opacity: 1 })
            })
        }
        // ------
    }, [dataProjects]);

    return (
        <>
            <article className='grid items-center h-full lg:h-[40rem] mt-20 lg:mt-0 relative px-4 lg:px-24 pt-4 lg:pt-24'>
                <div className="grid lg:grid-cols-2 items-center">
                    <div className='grid gap-4 order-2 lg:order-1 h-full'>
                        <p className='text-4xl font-bold dark:text-white hidden lg:block text1 -translate-x-10 opacity-0'>Hi, I&apos;m Reza Bagus Pratama</p>
                        <p className='text-2xl font-bold dark:text-white block lg:hidden text1 -translate-x-10 opacity-0'>Hi, <br /> I&apos;m Reza Bagus Pratama</p>

                        <div className="mb-2 text2 -translate-x-10 opacity-0">
                            <p className='text-4xl lg:text-6xl font-extrabold mb-0 lg:mb-4 dark:text-white'>Front-End Web Developer</p>
                            <p className="dark:text-white text-sm opacity-70">As a web developer, I am also a competitive programmer and tech enthusiast.</p>
                        </div>

                        <div className="grid lg:flex gap-3 font-bold items-center text3 -translate-x-10 opacity-0">
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
                            <Image src="/static/images/avatar-desktop.png" alt="User" width="672" height="672"></Image>
                        </div>
                        <div className="w-full lg:absolute -top-[29rem] -right-[8rem] block lg:hidden">
                            <Image src="/static/images/avatar-mobile.png" alt="User" width="672" height="672"></Image>
                        </div>
                    </div>
                </div>
            </article>

            <section className='px-4 lg:px-24 py-24 overflow-hidden about'>
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

            <section className="px-4 lg:px-24 py-24 skills">
                <div className="mb-10 lg:mb-20">
                    <Title title={'Skills'} darkText={'null'} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                    <div className="col-span-2 grid grid-cols-1 lg:grid-cols-3 relative justify-center items-center gap-0.5 w-full">
                        <ul className="bg-darkColor500 dark:bg-white col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 frontend translate-y-10 opacity-0 rounded-t-xl">
                            {dataIconFront.data.map((res: IconData, index: number) => {
                                return (
                                    <li className="inline-block mx-auto" key={index}>
                                        <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                    </li>
                                )
                            })}
                        </ul>

                        <p id="vertical-front" className="font-bold uppercase col-span-1 text-darkColor500 dark:text-white ml-[35px] frontend translate-y-10 opacity-0 hidden lg:block">FrontEnd Website</p>

                        <ul className="bg-darkColor500 dark:bg-white col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 backend translate-y-10 opacity-0">
                            {dataIconBack.data.map((res: IconData, index: number) => {
                                return (
                                    <li className="inline-block mx-auto" key={index}>
                                        <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                    </li>
                                )
                            })}
                        </ul>

                        <p id="vertical-front" className="font-bold uppercase col-span-1 text-darkColor500 dark:text-white ml-[35px] backend translate-y-10 opacity-0 hidden lg:block">BackEnd Website</p>

                        <ul className="bg-darkColor500 dark:bg-white col-span-2 grid grid-cols-4 justify-center items-center gap-5 p-5 other translate-y-10 opacity-0 rounded-b-xl">
                            {dataIconOther.data.map((res: IconData, index: number) => {
                                return (
                                    <li className="inline-block mx-auto" key={index}>
                                        <Image src={res.icon} alt={res.name} width={50} height={50} loading="lazy"></Image>
                                    </li>
                                )
                            })}
                        </ul>

                        <p id="vertical-front" className="font-bold uppercase col-span-1 text-darkColor500 dark:text-white ml-[35px] other translate-y-10 opacity-0 hidden lg:block">Other</p>
                    </div>

                    <p className="col-span-1 mx-5 text-darkColor500 dark:text-white text-center font-bold text-2xl detail translate-y-10 opacity-0">&quot;I also have a little understanding of the backend, in addition to the frontend.&quot;</p>
                </div>
            </section>

            <section className="px-4 lg:px-24 py-24">
                <div className="mb-10 lg:mb-20">
                    <Title title={'Latest Projects'} darkText={'null'} />
                </div>

                {typeof window !== "undefined" && window.innerWidth > 1024 ? (
                    // desktop view
                    <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
                        {dataProjects.map((res: PorjectsData, index: number) => {
                            // console.log(typeof(res.desktopView));
                            return (
                                <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
                                    <div className="w-full h-full col-start-1 col-span-3 relative">
                                        <MediaComponentDesktop url={res.desktopView} name={res.name} desktop={"desktop"} />
                                        <MediaComponentTablet name={res.name} url={res.tabletView} tablet={"tablet"} />
                                        <MediaComponentMobile name={res.name} url={res.mobileView} mobile={"mobile"} />
                                    </div>

                                    <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10">
                                        <p className="uppercase font-extrabold text-xl mb-3">{res.name}</p>
                                        <p className="font-bold text-lg text-darkColor200 mb-3">{res.description}</p>
                                        <ul>
                                            {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
                                                return (
                                                    <li key={ress.name} className="inline-block rounded-full bg-traditionalColor500 mr-0.5">
                                                        <p className="py-2 px-8 leading-none text-white font-bold text-xs">{ress.name}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    // mobile view
                    <div className="block lg:hidden w-full max-w-md bg-white rounded-lg sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
                        <div className="flow-root">
                            <ul role="list" className="relative projects">
                                {dataProjects.map((res: PorjectsData, index: number) => {
                                    return (
                                        <li key={index} className="py-3 sm:py-4 relative">
                                            <div className="absolute top-0 left-0 w-full h-full wrapperCard opacity-0 -translate-y-10 shadow">
                                                <Image src={res.desktopView} alt={res.name} fill style={{ objectFit: 'cover', opacity: '0.2' }} />
                                            </div>

                                            <div className="flex items-center relative cards opacity-0 -translate-y-10">
                                                <div className="flex-shrink-0 ml-[15px] rounded-full overflow-hidden">
                                                    {/* <img className="w-10 h-10 rounded-full object-cover bg-white" src={res.logo} alt="Neil image" /> */}
                                                    <Image width={40} height={40} style={{ objectFit: "cover", background: "white" }} src={res.logo} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4 mr-[10px]">
                                                    <p className="text-xs font-light text-darkColor500 dark:text-white truncate">
                                                        {res.name}
                                                    </p>
                                                    <p className="text-sm text-darkColor200 dark:text-slate-200 truncate">
                                                        {res.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )}

                <div className="flex justify-center">
                    <Link href={{ pathname: '/' }} className="py-2 px-8 text-xs lg:text-base bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors rounded-lg text-white dark:text-darkColor500">Show More</Link>
                </div>
            </section>
        </>
    )
}