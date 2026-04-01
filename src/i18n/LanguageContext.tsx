'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from './en';
import id from './id';

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

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'en' || saved === 'id')) {
            setLangState(saved);
        }
    }, []);

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
