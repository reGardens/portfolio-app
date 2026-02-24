'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-traditionalColor500 mb-4">Error</h1>
                <h2 className="text-2xl font-semibold text-darkColor500 dark:text-white mb-4">
                    Something went wrong!
                </h2>
                <p className="text-darkColor500 dark:text-white opacity-70 mb-8">
                    We apologize for the inconvenience.
                </p>
                <button
                    onClick={() => reset()}
                    className="inline-block bg-traditionalColor500 hover:bg-traditionalColor600 text-white font-bold py-3 px-6 rounded-2xl transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    )
}
