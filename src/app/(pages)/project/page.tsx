import type { Metadata } from 'next';
import ListProjects from './ListProjects';
import dataIcons from '../../../../public/static/dataSkills.json';
import dataProjects from '../../../../public/static/dataProjects.json';
import type { ProjectData } from '@/types/project';

export const metadata: Metadata = {
    title: 'Detail Projects',
    description: 'Browse the complete list of projects built by Reza Bagus Pratama, showcasing web development work across React, Next.js, and full stack technologies.',
}

interface Item {
    name: string,
}

export default async function Project() {
    const dataFrontEnd = dataIcons.find((item: Item) => item.name === 'frontend');
    const dataBackEnd = dataIcons.find((item: Item) => item.name === 'backend');
    const dataOtherSkills = dataIcons.find((item: Item) => item.name === 'other');

    return (
        <>
            <main className="">
                {
                    dataFrontEnd && dataBackEnd && dataOtherSkills &&
                    <ListProjects
                        dataIconFront={dataFrontEnd}
                        dataIconBack={dataBackEnd}
                        dataIconOther={dataOtherSkills}
                        dataProjects={dataProjects as unknown as ProjectData[]}
                    />
                }
            </main>
        </>
    )
}
