import type { Metadata } from 'next';
import HomeClientSide from './HomeClientSide';
import dataIcons from '../../../../public/static/dataSkills.json';
import dataProjects from '../../../../public/static/dataProjects.json';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Explore the portfolio of Reza Bagus Pratama, a Full Stack and Front End Developer. Discover featured projects, skills, and experience in building modern web applications.',
}

interface Item {
    name: string,
}

export default async function Home() {
    const dataFrontEnd = dataIcons.find((item: Item) => item.name === 'frontend');
    const dataBackEnd = dataIcons.find((item: Item) => item.name === 'backend');
    const dataOtherSkills = dataIcons.find((item: Item) => item.name === 'other');
    const dataMobile = dataIcons.find((item: Item) => item.name === 'mobile');

    const latestProject = dataProjects.slice(0, 5);

    return (
        <>
            <main className="">
                {
                    dataFrontEnd && dataBackEnd && dataOtherSkills && dataMobile &&
                    <HomeClientSide
                        dataIconFront={dataFrontEnd}
                        dataIconBack={dataBackEnd}
                        dataIconOther={dataOtherSkills}
                        dataIconMobile={dataMobile}
                        dataProjects={latestProject}
                    />
                }
            </main>
        </>
    )
}
