import type { Metadata } from 'next';
import Index from '.';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}

export default function Home() {
    return (
        <>
            <main className="">
                <Index />
            </main>
        </>
    )
}
