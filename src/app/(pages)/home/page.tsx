import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import HomeClientSide from './HomeClientSide';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}

export default async function Home() {
    const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    const data = await JSON.parse(file);
    const dataFrontEnd = data.find(item => item.name === 'frontend');

    return (
        <>
            <main className="">
                {dataFrontEnd && <HomeClientSide dataIcons={dataFrontEnd} />}
            </main>
        </>
    )
}
