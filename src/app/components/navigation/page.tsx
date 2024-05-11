'use client'
import DarkMode from "@/app/components/toggledarkMode/pages";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import Draggable from "gsap/Draggable";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

gsap.registerPlugin(Draggable)

export default function Navigation() {
    const [aside, setAside] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAside = () => {
        setAside(true)
        gsap.to(".aside", {
            y: 50 + '%',
            duration: 1,
        });
    }

    useEffect(() => {
        const asideEl = document.getElementById('aside');

        if (asideEl) {
            if (aside === true) {
                asideEl.style.display = "block";
            } else if (aside === false) {
                asideEl.style.display = "none";
            }
        }

        // sticky navbar
        window.addEventListener('scroll', () => {
            const stickyNav = document.getElementById('nav');
            if (window.scrollY > 0) {
                if (stickyNav && localStorage.getItem('color-theme') === 'dark') {
                    stickyNav.classList.add("!bg-darkColor500");
                    stickyNav.classList.remove("!bg-white");
                } else if (stickyNav) {
                    stickyNav.classList.add("!bg-white");
                    stickyNav.classList.remove("!bg-darkColor500");
                }
            } else if (window.scrollY == 0) {
                if (stickyNav) {
                    stickyNav.classList.remove("!bg-white");
                    stickyNav.classList.remove("!bg-darkColor500");
                }
            }
        })

        // dragable aside
        Draggable.create("#drag", {
            type: "y",
            bounds: document.documentElement,
            inertia: true,
            edgeResistance: 1,
            onDragEnd: function () {
                // Periksa posisi Y setelah drag 1/4 dari layar, tutup setengah
                if (this.y > window.innerHeight / 4) {
                    // Jika posisi Y melebihi 1/4 tinggi layar, tutup elemen setengah
                    gsap.to(this.target, 0.7, {
                        y: window.innerHeight / 2,
                    });
                } else {
                    // Jika tidak, kembalikan elemen ke posisi awal
                    gsap.to(this.target, 0.3, {
                        y: 0
                    });
                }

                // Periksa posisi Y setelah drag setengah dari layar, tutup full
                if (this.y > window.innerHeight / 2) {
                    // Jika element sudah setengah dari innerHeight, tutup semua
                    gsap.to(this.target, 0.7, {
                        y: window.innerHeight + (window.innerHeight * 0.2),
                    });
                }
            }
        });
    }, [aside]);

    return (
        <>
            <nav id="nav" className={`fixed w-full z-20 top-0 start-0 transition-colors bg-transparent`}>
                <div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-24 py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-traditionalColor500">Portfolio</span>
                    </a>
                    <div className="flex md:order-2 space-x-1 md:space-x-3 rtl:space-x-reverse">
                        <DarkMode />
                        <Link href={"whatsapp://send?text=Hello&phone=+6285179910305"} type="button" className="text-white bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors font-medium rounded-lg text-sm px-3 py-2 text-center">Contact</Link>
                        <button onClick={handleAside} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 relative z-[100]">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link href="/#header" scroll className="block py-2 px-3 rounded  text-traditionalColor500 md:p-0 dark:text-traditionalColor500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/#about" scroll className="block py-2 px-3 text-slate-800 rounded hover:text-traditionalColor500 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link href="/#skill" scroll className="block py-2 px-3 text-slate-800 rounded hover:text-traditionalColor500 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skill</Link>
                            </li>
                            <li>
                                <Link href="/#project" scroll className="block py-2 px-3 text-slate-800 rounded hover:text-traditionalColor500 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* aside */}
            <aside id="drag" className="bg-traditionalColor500 aside translate-y-[150vh] rounded-2xl w-full h-full fixed top-0 left-0 z-[99] px-10 py-20">
                <ul className="flex flex-col justify-start items-center h-full">
                    <div className="flex justify-center absolute top-3 left-0 w-full">
                        <button type="button" className="text-sm bg-white dark:bg-darkColor500 text-gray-500 dark:text-gray-400 z-[999] border-b-[6px] border-white dark:border-darkColor500 w-44 rounded-full">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>

                    <li>
                        <Link href={{ pathname: '/home' }} scroll className="block py-2 px-3 text-3xl font-bold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 text-white dark:text-darkColor500 md:p-0 text-center transition-all" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/project' }} scroll className="block py-2 px-3 text-3xl font-bold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 text-white dark:text-darkColor500 md:p-0 text-center transition-all" aria-current="page">Project</Link>
                    </li>
                    {/* <li>
                        <Link href="/#about" scroll className="block py-2 px-3 text-3xl font-bold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 text-white dark:text-darkColor500 md:p-0 text-center transition-all">About</Link>
                    </li>
                    <li>
                        <Link href="/#skill" scroll className="block py-2 px-3 text-3xl font-bold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 text-white dark:text-darkColor500 md:p-0 text-center transition-all">Skill</Link>
                    </li>
                    <li>
                        <Link href="/#project" scroll className="block py-2 px-3 text-3xl font-bold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 text-white dark:text-darkColor500 md:p-0 text-center transition-all">Project</Link>
                    </li> */}
                </ul>
            </aside>
        </>
    );
}
