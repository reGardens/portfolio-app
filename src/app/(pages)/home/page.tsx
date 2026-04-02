import type { Metadata } from 'next';
import HomeClientSide from './HomeClientSide';
import dataIcons from '../../../../public/static/dataSkills.json';
import dataProjects from '../../../../public/static/dataProjects.json';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}

interface Item {
    name: string,
}

export default async function Home() {
    const dataFrontEnd = dataIcons.find((item: Item) => item.name === 'frontend');
    const dataBackEnd = dataIcons.find((item: Item) => item.name === 'backend');
    const dataOtherSkills = dataIcons.find((item: Item) => item.name === 'other');

    const latestProject = dataProjects.slice(0, 5);

    return (
        <>
            <main className="">
                {
                    dataFrontEnd && dataBackEnd && dataOtherSkills &&
                    <HomeClientSide
                        dataIconFront={dataFrontEnd}
                        dataIconBack={dataBackEnd}
                        dataIconOther={dataOtherSkills}
                        dataProjects={latestProject}
                    />
                }
            </main>
        </>
    )
}
