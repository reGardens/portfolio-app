"use client"

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Typography } from '@/components/ui';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLoadingStore } from '@/store/useLoadingStore';

interface Hashtags {
    name: string;
    link: string;
}

export default function DetailProject() {
    const router = useRouter();
    const { t, lang } = useLanguage();
    const setLoading = useLoadingStore((s) => s.setLoading);
    const searchParams = useSearchParams();
    const dataString = searchParams?.get('data');
    const data = dataString ? JSON.parse(dataString) : null;

    const handleBack = () => {
        setLoading(true);
        router.push('/project');
    }

    return (
        <section className="px-4 lg:px-20 mt-40 mb-10 text-black dark:text-white w-full">
            <button
                onClick={handleBack}
                className="flex items-center gap-2 mb-6 text-darkColor500 dark:text-white hover:text-traditionalColor500 dark:hover:text-traditionalColor500 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold text-sm">{t.notFound.back}</span>
            </button>

            {data.image == null ?
                (
                    <div className={`w-full`}>
                        <Image
                            src={'/static/default/default-image.png'}
                            alt={'default-image'}
                            width={400}
                            height={100}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full">
                        <Image
                            src={data && data.image}
                            alt="Neil image"
                            width={400}
                            height={100}
                            style={{
                                objectFit: "contain",
                                margin: '0 auto'
                            }}
                        />
                    </div>
                )
            }

            <Typography variant="body-m" fontWeight="extrabold" className="opacity-75 uppercase mt-6">{data && data.name}</Typography>
            <ul className="mb-3">
                {Array.isArray(data?.hashtags) && data?.hashtags.map((ress: Hashtags) => {
                    return (
                        <li key={ress.name} className="inline-block mr-1.5 italic">
                            <Typography variant="body-s" fontWeight="extrabold" className="leading-none text-darkColor500 dark:text-white opacity-50 tracking-wider">{ress.name}</Typography>
                        </li>
                    )
                })}
            </ul>
            <Typography variant="body-m" className="mt-1 tracking-wide text-justify">
                {data && (typeof data.description === 'string' ? data.description : data.description?.[lang])}
            </Typography>
        </section>
    )
}
