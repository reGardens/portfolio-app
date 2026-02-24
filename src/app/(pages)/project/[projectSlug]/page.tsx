"use client"

import { Button } from '@mui/material';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { Typography } from '@/components/ui';

interface Hashtags {
    name: string;
    link: string;
}

export default function ProjectDetail() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dataString = searchParams?.get('data');
    const data = dataString ? JSON.parse(dataString) : null;

    const handleBack = () => {
        router.push('/project');
    }

    return (
        <section className="px-4 lg:px-24 mt-40 mb-10 text-black dark:text-white w-full">
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
                {Array.isArray(data?.hashtags) && data?.hashtags.map((ress: Hashtags) => {
                    return (
                        <li key={ress.name} className="inline-block mr-1.5 italic">
                            <Typography variant="body-s" fontWeight="extrabold" className="leading-none text-darkColor500 dark:text-white opacity-50 tracking-wider">{ress.name}</Typography>
                        </li>
                    )
                })}
            </ul>

            <Typography variant="body-m" fontWeight="extrabold" className="opacity-75 uppercase mt-6">{data && data.name}</Typography>
            <Typography variant="body-m" className="mt-1 tracking-wide text-justify">{data && data.description}</Typography>
            <Button sx={{ marginTop: '15px' }} variant="contained" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                Back
            </Button>
        </section>
    )
}