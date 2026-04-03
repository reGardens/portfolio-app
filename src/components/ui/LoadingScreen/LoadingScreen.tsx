'use client'

import { useLoadingStore } from '@/store/useLoadingStore';
import Image from 'next/image';

export default function LoadingScreen() {
    const isLoading = useLoadingStore((s) => s.isLoading);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-darkColor500">
            <Image
                src="/static/Loading/loading-screen.gif"
                alt="Loading"
                width={200}
                height={200}
                unoptimized
                priority
            />
        </div>
    );
}
