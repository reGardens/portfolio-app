'use client'

import DarkMode from "@/components/widget/toggledarkMode/pages";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
    const [aside, setAside] = useState<boolean>(false);
    const { t } = useLanguage();

    const handleAside = () => {
        setAside(!aside);
    }

    useEffect(() => {
        const handleScroll = () => {
            const stickyNav = document.getElementById('nav');
            if (stickyNav) {
                if (window.scrollY > 0) {
                    stickyNav.classList.add("shadow-md");
                } else {
                    stickyNav.classList.remove("shadow-md");
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Maintenance Alert */}
            <Alert
                title={t.alert.warningTitle}
                subtitle={t.alert.maintenanceSubtitle}
            />

            <nav id="nav" className={`fixed w-full z-20 top-[4.4rem] md:top-[3.2rem] start-0 transition-colors bg-white dark:bg-darkColor500`}>
                <div className="flex items-center justify-between mx-auto px-4 lg:px-24 py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Typography variant="h3" fontWeight="semibold" className="self-center text-traditionalColor500">Portfolio</Typography>
                    </a>
                    <div className="flex md:order-2 items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                        <ToggleSwitchMultilanguage />
                        <DarkMode />
                        <Link href={"whatsapp://send?text=Hello&phone=+6285179910305"} className="text-white bg-traditionalColor500 hover:bg-traditionalColor600 transition-colors font-medium rounded-2xl text-sm px-3 py-2 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">{t.nav.contact}</Link>
                        <button onClick={handleAside} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 relative z-[100]">
                            <span className="sr-only">{t.nav.openMenu}</span>
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
                                    }`} aria-current="page">{t.nav.home}</Link>
                            </li>
                            <li>
                                <Link href="/project" className={`block py-2 px-3 rounded md:p-0 transition-colors ${pathname === '/project'
                                    ? 'text-traditionalColor500 dark:text-traditionalColor500 font-bold'
                                    : 'text-slate-800 hover:text-traditionalColor500 dark:text-white dark:hover:text-traditionalColor500'
                                    }`}>{t.nav.project}</Link>
                            </li>
                        </ul>
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
                            }`} aria-current="page">
                            <HomeIcon />
                            {t.nav.home}
                        </Link>
                    </li>
                    <li className="w-full max-w-xs">
                        <Link href="/project" className={`py-3 px-6 text-lg font-bold rounded-2xl text-center transition-all flex items-center gap-3 ${pathname === '/project'
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-darkColor500 shadow-lg backdrop-blur-sm'
                            : 'text-white/70 dark:text-darkColor500/70 hover:bg-white/10 dark:hover:bg-black/10 hover:text-white dark:hover:text-darkColor500'
                            }`} aria-current="page">
                            <ViewListIcon />
                            {t.nav.project}
                        </Link>
                    </li>
                </ul>
            </BottomSheet>
        </>
    );
}
