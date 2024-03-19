'use client'
import gsap from "gsap";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode/page";

export default function Navigation() {
    const [aside, setAside] = useState<boolean>(false);

    const handleAside = () => {
        setAside(true)
        gsap.to(".aside", {
            x: 0 + '%',
            opacity: 1,
            duration: 1
        });
    }
    const handleAsideClose = () => {
        setAside(false)
        gsap.to(".aside", {
            x: 100 + '%',
            opacity: 0,
            duration: 1
        });
    }

    useEffect(() => {
        const asideEl = document.getElementById('aside');

        if (asideEl) {
            if (aside === true) {
                asideEl.style.display = "grid";
            } else if (aside === false) {
                asideEl.style.display = "none";
            }
        }
    }, [aside]);

    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0">
                <div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-24 py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-traditionalColor500">Portfolio</span>
                    </a>
                    <div className="flex md:order-2 space-x-0 md:space-x-3 rtl:space-x-reverse">
                        <DarkMode />
                        <button type="button" className="text-white bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center">Contact</button>
                        <button onClick={handleAside} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 relative z-[100]">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 rounded  text-traditionalColor500 md:p-0 dark:text-traditionalColor500" aria-current="page">Home</a>
                            </li>
                            {/* <li>
                                <a href="#" className="block py-2 px-3 text-slate-800 rounded hover:text-traditionalColor500 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-slate-800 rounded hover:text-traditionalColor500 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* aside */}
            <aside className="bg-traditionalColor500 aside translate-x-full opacity-0 w-full h-full fixed top-0 left-0 bg-blac z-[99] px-10 py-20">
                <ul className="grid justify-center items-center h-full">
                    <button id="asideClose" onClick={handleAsideClose} type="button" className="mx-auto abs items-center p-2 w-10 h-10 justify-center text-sm bg-white dark:bg-darkColor500 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-[999] relative">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <li>
                        <a href="#" className="block py-2 px-3 text-3xl font-bold rounded text-white dark:text-darkColor500 md:p-0 text-center" aria-current="page">Home</a>
                    </li>
                    {/* <li>
                        <a href="#" className="block py-2 px-3 text-3xl font-bold rounded text-white dark:text-textDark hover:bg-gray-100 md:hover:bg-transparent md:hover:text-traditionalColor500 md:p-0 text-center">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-3xl font-bold rounded text-white dark:text-textDark hover:bg-gray-100 md:hover:bg-transparent md:hover:text-traditionalColor500 md:p-0 text-center">Services</a>
                    </li> */}
                </ul>
            </aside>
        </>
    );
}
