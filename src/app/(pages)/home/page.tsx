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
    const dataBackEnd = data.find(item => item.name === 'backend');
    const dataOtherSkills = data.find(item => item.name === 'other');

    return (
        <>
            <main className="">
                {dataFrontEnd && dataBackEnd && dataOtherSkills && <HomeClientSide dataIconFront={dataFrontEnd} dataIconBack={dataBackEnd} dataIconOther={dataOtherSkills} />}
            </main>
        </>
    )
}
