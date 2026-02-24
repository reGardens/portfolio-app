import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-traditionalColor500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-darkColor500 dark:text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-darkColor500 dark:text-white opacity-70 mb-8">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/home"
                    className="inline-block bg-traditionalColor500 hover:bg-traditionalColor600 text-white font-bold py-3 px-6 rounded-2xl transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
