import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import HomeClientSide from './HomeClientSide';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}

interface Item {
    name: string,
}

export default async function Home() {
    const icons = await fs.readFile(process.cwd() + '/public/static/dataSkills.json', 'utf8');
    const dataIcons = await JSON.parse(icons);
    const dataFrontEnd = dataIcons.find((item: Item) => item.name === 'frontend');
    const dataBackEnd = dataIcons.find((item: Item) => item.name === 'backend');
    const dataOtherSkills = dataIcons.find((item: Item) => item.name === 'other');

    const projects = await fs.readFile(process.cwd() + '/public/static/dataProjects.json', 'utf8');
    const dataProjects = await JSON.parse(projects);
    const latestProject = dataProjects.slice(-3);

    return (
        <>
            <main className="">
                {
                    dataFrontEnd && dataBackEnd && dataOtherSkills &&
                    <HomeClientSide
                    dataIconFront={dataFrontEnd}
                    dataIconBack={dataBackEnd}
                    dataIconOther={dataOtherSkills}
                    dataProjects={dataProjects}
                    />
                }
            </main>
        </>
    )
}
