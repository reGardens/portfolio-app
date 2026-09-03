'use client'

import { useEffect } from 'react';
import { useThemeStore } from './useThemeStore';

/**
 * Runs a single MutationObserver that watches the `dark` class on
 * document.documentElement and syncs it into the theme store.
 * Call this once at a top-level, always-mounted client component.
 */
export function useThemeSync() {
    const setIsDark = useThemeStore((s) => s.setIsDark);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => {
            observer.disconnect();
        };
    }, [setIsDark]);
}
