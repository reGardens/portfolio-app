"use client"

import { Button } from '@mui/material';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface Hashtags {
    name: string;
    link: string;
}

export default function ProjectDetail() {
    const searchParams = useSearchParams();
    const dataString = searchParams?.get('data');
    const data = dataString ? JSON.parse(dataString) : null;

    const router = useRouter();
    const handleBack = () => {
        router.push('/project');
    }

    return (
        <section className="px-4 lg:px-24 mt-40 mb-10 text-black dark:text-white">
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
            <ul className="mb-3">
                {Array.isArray(data.hashtags) && data.hashtags.map((ress: Hashtags) => {
                    return (
                        <li key={ress.name} className="inline-block mr-1.5 italic">
                            <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">{ress.name}</p>
                        </li>
                    )
                })}
            </ul>

            <p className="font-extrabold opacity-75 uppercase mt-6">{data && data.name}</p>
            <p className="mt-1 tracking-wide text-[15px] text-justify">{data && data.description}</p>
            <Button sx={{ marginTop: '15px' }} variant="contained" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                Back
            </Button>
        </section>
    )
}