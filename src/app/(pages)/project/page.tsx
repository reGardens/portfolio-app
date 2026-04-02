import type { Metadata } from 'next';
import ListProjects from './ListProjects';
import dataIcons from '../../../../public/static/dataSkills.json';
import dataProjects from '../../../../public/static/dataProjects.json';

export const metadata: Metadata = {
    title: 'Detail Projects',
    description: 'Detail Project Page',
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
                        dataProjects={dataProjects}
                    />
                }
            </main>
        </>
    )
}
