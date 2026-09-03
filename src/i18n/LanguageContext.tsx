'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from './en';
import id from './id';
import { useThemeSync } from '@/store/useThemeSync';

type Language = 'en' | 'id';

const translations = { en, id };

interface LanguageContextType {
    lang: Language;
    t: typeof en;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    t: en,
    setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>('en');

    // Centralized dark-mode detection (single MutationObserver).
    useThemeSync();

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'en' || saved === 'id')) {
            setLangState(saved);
        }
    }, []);

    // Keep <html lang> in sync with the selected language (on mount and on change).
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
