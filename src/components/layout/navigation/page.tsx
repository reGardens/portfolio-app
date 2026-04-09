'use client'

import DarkMode from "@/components/widget/toggledarkMode/pages";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Typography } from "@/components/ui";
import Alert from "@/components/ui/Alert/Alert";
import BottomSheet from "@/components/ui/BottomSheet/BottomSheet";
import ToggleSwitchMultilanguage from "@/components/ui/Toggle/ToggleSwitchMultilanguage";
import { useLanguage } from "@/i18n/LanguageContext";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';

export default function Navigation() {
    const pathname = usePathname();
    const [aside, setAside] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();
    const navRef = useRef<HTMLElement>(null);

    const handleAside = () => setAside(!aside);

    // Scroll effect — glassmorphism on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate nav on mount
    useEffect(() => {
        if (navRef.current) {
            gsap.fromTo(navRef.current,
                { y: -60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
            );
        }
    }, []);

    return (
        <>
            <Alert
                title={t.alert.warningTitle}
                subtitle={t.alert.maintenanceSubtitle}
            />

            <nav
                ref={navRef}
                id="nav"
                style={{ opacity: 0 }}
                className={`fixed w-full z-20 top-[4.4rem] md:top-[3.2rem] start-0 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/80 dark:bg-darkColor500/80 backdrop-blur-xl shadow-sm'
                        : 'bg-white dark:bg-darkColor500'
                }`}
            >
                <div className="flex items-center justify-between mx-auto px-4 lg:px-24 py-3">
                    {/* Logo */}
                    <Link href="/home" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-traditionalColor500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <Typography variant="h3" fontWeight="semibold" className="self-center text-traditionalColor500 hidden sm:block">
                            Portfolio
                        </Typography>
                    </Link>

                    {/* Desktop nav links — pill style */}
                    <div className="hidden md:flex items-center bg-slate-100/80 dark:bg-white/5 rounded-full p-1 gap-1" id="navbar-sticky">
                        <Link
                            href="/home"
                            className={`nav-link relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                pathname === '/home'
                                    ? 'bg-traditionalColor500 text-white shadow-md'
                                    : 'text-slate-600 hover:text-darkColor500 dark:text-slate-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                            }`}
                        >
                            {t.nav.home}
                        </Link>
                        <Link
                            href="/project"
                            className={`nav-link relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                pathname?.startsWith('/project')
                                    ? 'bg-traditionalColor500 text-white shadow-md'
                                    : 'text-slate-600 hover:text-darkColor500 dark:text-slate-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                            }`}
                        >
                            {t.nav.project}
                        </Link>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <ToggleSwitchMultilanguage />
                        <DarkMode />
                        <Link
                            href="whatsapp://send?text=Hello&phone=+6285179910305"
                            className="hidden sm:inline-flex text-white bg-traditionalColor500 hover:bg-traditionalColor600 transition-all font-medium rounded-full text-sm px-4 py-2 active:scale-95"
                        >
                            {t.nav.contact}
                        </Link>
                        <button
                            onClick={handleAside}
                            type="button"
                            className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative z-[100]"
                        >
                            <span className="sr-only">{t.nav.openMenu}</span>
                            <div className="flex flex-col gap-1.5">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${aside ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${aside ? 'opacity-0' : ''}`} />
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${aside ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Bottom Drawer */}
            <BottomSheet open={aside} onClose={() => setAside(false)}>
                <ul className="flex flex-col gap-3 items-center pt-4">
                    <li className="w-full max-w-xs">
                        <Link href="/home" className={`py-3 px-6 text-lg font-bold rounded-2xl text-center transition-all flex items-center gap-3 ${pathname === '/home'
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-darkColor500 shadow-lg backdrop-blur-sm'
                            : 'text-white/70 dark:text-darkColor500/70 hover:bg-white/10 dark:hover:bg-black/10 hover:text-white dark:hover:text-darkColor500'
                            }`}>
                            <HomeIcon />
                            {t.nav.home}
                        </Link>
                    </li>
                    <li className="w-full max-w-xs">
                        <Link href="/project" className={`py-3 px-6 text-lg font-bold rounded-2xl text-center transition-all flex items-center gap-3 ${pathname?.startsWith('/project')
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-darkColor500 shadow-lg backdrop-blur-sm'
                            : 'text-white/70 dark:text-darkColor500/70 hover:bg-white/10 dark:hover:bg-black/10 hover:text-white dark:hover:text-darkColor500'
                            }`}>
                            <ViewListIcon />
                            {t.nav.project}
                        </Link>
                    </li>
                </ul>
            </BottomSheet>
        </>
    );
}
