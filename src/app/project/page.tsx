import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import DetailProjects from './detailProjects';

export const metadata: Metadata = {
    title: 'Detail Projects',
    description: 'Detail Project Page',
}

interface Item {
    name: string,
}

export default async function Project() {
    const skillsPath = process.env.DATA_SKILLS_PATH || 'public/static/dataSkills.json';
    const projectsPath = process.env.DATA_PROJECTS_PATH || 'public/static/dataProjects.json';

    const icons = await fs.readFile(process.cwd() + '/' + skillsPath, 'utf8');
    const dataIcons = await JSON.parse(icons);
    const dataFrontEnd = dataIcons.find((item: Item) => item.name === 'frontend');
    const dataBackEnd = dataIcons.find((item: Item) => item.name === 'backend');
    const dataOtherSkills = dataIcons.find((item: Item) => item.name === 'other');

    const projects = await fs.readFile(process.cwd() + '/' + projectsPath, 'utf8');
    const dataProjects = await JSON.parse(projects);

    return (
        <>
            <main className="">
                {
                    dataFrontEnd && dataBackEnd && dataOtherSkills &&
                    <DetailProjects
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
