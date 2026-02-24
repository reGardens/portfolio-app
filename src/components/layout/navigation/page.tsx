'use client'

import DarkMode from "@/components/widget/toggledarkMode/pages";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Draggable from "gsap/Draggable";
import { Accordion, AccordionDetails, AccordionSummary, Typography as MuiTypography } from "@mui/material";
<<<<<<< HEAD
=======
import { Typography } from "@/components/ui";
>>>>>>> 2a82f1960301319218fdec360b111d55dd17eba2
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from "@/components/ui";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';

gsap.registerPlugin(Draggable)

export default function Navigation() {
    const pathname = usePathname();
    const [aside, setAside] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

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

        // Function to update navbar background
        const updateNavbarBackground = (isDarkMode: boolean) => {
            const stickyNav = document.getElementById('nav');
            if (stickyNav && window.scrollY > 0) {
                if (isDarkMode) {
                    stickyNav.classList.add("!bg-darkColor500");
                    stickyNav.classList.remove("!bg-white");
                } else {
                    stickyNav.classList.add("!bg-white");
                    stickyNav.classList.remove("!bg-darkColor500");
                }
            }
        };

        // Check initial theme
        const checkTheme = () => {
            const isDarkMode = localStorage.getItem('color-theme') === 'dark' ||
                (!('color-theme' in localStorage) && document.documentElement.classList.contains('dark'));
            setIsDark(isDarkMode);
            updateNavbarBackground(isDarkMode);
        };

        checkTheme();

        // Listen for theme changes
        const themeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    setIsDark(isDarkMode);
                    updateNavbarBackground(isDarkMode);
                }
            });
        });

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // sticky navbar
        const handleScroll = () => {
            const stickyNav = document.getElementById('nav');
            const isDarkMode = localStorage.getItem('color-theme') === 'dark';

            if (window.scrollY > 0) {
                if (stickyNav && isDarkMode) {
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
        };

        window.addEventListener('scroll', handleScroll);

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
            themeObserver.disconnect();
        };
    }, [aside]);

    return (
        <>
            {/* Maintenance Alert */}
            <div className="fixed w-full z-30 top-0 left-0 flex items-center justify-center p-4 text-sm text-yellow-800 rounded-b-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <Typography variant="body-s" className="sr-only">Info</Typography>
                <div>
                    <Typography variant="body-s" fontWeight="medium" className="text-center inline">Warning alert!</Typography> <Typography variant="body-s" className="inline">This website is currently under maintenance. We apologize for the inconvenience.</Typography>
                </div>
            </div>

            <nav id="nav" className={`fixed w-full z-20 top-[3.2rem] start-0 transition-colors bg-transparent`}>
                <div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-24 py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Typography variant="h3" fontWeight="semibold" className="self-center text-traditionalColor500">Portfolio</Typography>
                    </a>
                    <div className="flex md:order-2 space-x-1 md:space-x-3 rtl:space-x-reverse">
                        <DarkMode />
                        <Link href={"whatsapp://send?text=Hello&phone=+6285179910305"} className="text-white bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors font-medium rounded-2xl text-sm px-3 py-2 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">Contact</Link>
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
                                <Link href="/home" className={`block py-2 px-3 rounded md:p-0 transition-colors ${pathname === '/home'
                                    ? 'text-traditionalColor500 dark:text-traditionalColor500 font-bold'
                                    : 'text-slate-800 hover:text-traditionalColor500 dark:text-white dark:hover:text-traditionalColor500'
                                    }`} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/project" className={`block py-2 px-3 rounded md:p-0 transition-colors ${pathname === '/project'
                                    ? 'text-traditionalColor500 dark:text-traditionalColor500 font-bold'
                                    : 'text-slate-800 hover:text-traditionalColor500 dark:text-white dark:hover:text-traditionalColor500'
                                    }`}>Project</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Bottom Drawer */}
            <aside id="drag" className="bg-traditionalColor500 aside translate-y-[150vh] rounded-2xl w-full h-full fixed top-0 left-0 z-[99] px-10 py-20">
                <ul className="flex flex-col justify-start items-center h-full">
                    <div className="flex justify-center absolute top-3 left-0 w-full">
                        <button type="button" className="text-sm bg-white dark:bg-darkColor500 text-gray-500 dark:text-gray-400 z-[999] border-b-[6px] border-white dark:border-darkColor500 w-44 rounded-full">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>

                    <li>
                        <Link href="/home" className={`py-2 px-3 text-xl font-extrabold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 md:p-0 text-center transition-all flex items-center gap-1 ${pathname === '/home'
                            ? 'text-white dark:text-white shadow-xl border-white dark:border-white'
                            : 'text-white dark:text-darkColor500'
                            }`} aria-current="page">
                            <HomeIcon />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/project" className={`py-2 px-3 text-xl font-extrabold rounded-xl hover:shadow-xl border-b-[0.5px] border-b-transparent hover:border-white hover:dark:border-darkColor500 md:p-0 text-center transition-all flex items-center gap-1 ${pathname === '/project'
                            ? 'text-white dark:text-white shadow-xl border-white dark:border-white'
                            : 'text-white dark:text-darkColor500'
                            }`} aria-current="page">
                            <ViewListIcon />
                            Project
                        </Link>
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
