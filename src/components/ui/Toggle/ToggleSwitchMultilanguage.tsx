'use client'

import { useLanguage } from '@/i18n/LanguageContext';

export default function ToggleSwitchMultilanguage() {
    const { lang, setLang } = useLanguage();
    const isEn = lang === 'en';

    return (
        <button
            onClick={() => setLang(isEn ? 'id' : 'en')}
            className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 ease-in-out focus:outline-none flex-shrink-0"
            style={{ backgroundColor: isEn ? undefined : undefined }}
            aria-label="Toggle language"
        >
            {/* Track labels */}
            <span className={`absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-opacity duration-300 ${isEn ? 'opacity-0' : 'opacity-60 text-gray-500 dark:text-gray-400'}`}>
                EN
            </span>
            <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-opacity duration-300 ${isEn ? 'opacity-60 text-gray-500 dark:text-gray-400' : 'opacity-0'}`}>
                ID
            </span>

            {/* Thumb */}
            <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.68,-0.15,0.265,1.35)] ${isEn ? 'left-1' : 'left-[calc(100%-1.625rem)]'}`}
            >
                <span className="text-[9px] font-bold text-gray-700">
                    {isEn ? 'EN' : 'ID'}
                </span>
            </span>
        </button>
    );
}
