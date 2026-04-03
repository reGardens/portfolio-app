'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoadingStore } from '@/store/useLoadingStore';

export default function RouteChangeListener() {
    const pathname = usePathname();
    const setLoading = useLoadingStore((s) => s.setLoading);

    useEffect(() => {
        setLoading(false);
    }, [pathname, setLoading]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href) return;

            // Skip external links, hash links, and same-page links
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('whatsapp') || href.startsWith('tel')) return;

            // Skip if target is _blank
            if (anchor.target === '_blank') return;

            // Skip if same path
            if (href === pathname) return;

            setLoading(true);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [pathname, setLoading]);

    return null;
}
