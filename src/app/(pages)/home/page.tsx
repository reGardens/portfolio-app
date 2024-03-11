import { HomeTitle } from '@/app/components/parallax/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}

export default function Home() {
    return (
        <main className="grid md:grid-cols-2 min-h-screen h-screen flex-col items-center justify-between p-4 md:p-24 mt-20 md:mt-0">
            <HomeTitle />

            <div className='relative order-1 md:order-2'>
                {/* <div className=" absolute top-0 right-0 bg-red-600"> */}
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height="500" className='w-full'>
                        <path fill="#DD6022" d="M50.7,-62.8C64,-49.3,71.8,-31.7,73.1,-14.4C74.5,3,69.3,20,61.2,36.7C53.2,53.3,42.2,69.6,27.3,75C12.4,80.4,-6.4,74.9,-23,67.2C-39.5,59.4,-53.7,49.3,-61.5,35.6C-69.3,21.9,-70.6,4.6,-67.5,-11.8C-64.5,-28.2,-57.1,-43.7,-45.1,-57.4C-33.1,-71.1,-16.6,-83,1.1,-84.3C18.7,-85.6,37.5,-76.3,50.7,-62.8Z"
                        transform="translate(100 100)"/>
                    </svg> */}
                {/* </div> */}
                <div className="w-full md:absolute -top-[29rem] -right-[8rem] hidden md:block">
                    <img src="/static/images/avatar-desktop.png" alt="User" className='mx-auto w-[42rem]' />
                </div>
                <div className="w-full md:absolute -top-[29rem] -right-[8rem] block md:hidden">
                    <img src="/static/images/avatar-mobile.png" alt="User" className='mx-auto w-[42rem]' />
                </div>
            </div>
        </main>
    )
}
