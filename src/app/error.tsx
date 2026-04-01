'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const { t } = useLanguage();

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-traditionalColor500 mb-4">{t.error.title}</h1>
                <h2 className="text-2xl font-semibold text-darkColor500 dark:text-white mb-4">
                    {t.error.message}
                </h2>
                <p className="text-darkColor500 dark:text-white opacity-70 mb-8">
                    {t.error.description}
                </p>
                <button
                    onClick={() => reset()}
                    className="inline-block bg-traditionalColor500 hover:bg-traditionalColor600 text-white font-bold py-3 px-6 rounded-2xl transition-colors"
                >
                    {t.error.tryAgain}
                </button>
            </div>
        </div>
    )
}
