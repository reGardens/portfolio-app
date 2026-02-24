"use client"

import HeaderSection from "@/components/home/HeaderSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";

interface Props {
    dataIconFront: any;
    dataIconBack: any;
    dataIconOther: any;
    dataProjects: any;
}

export default function HomeClientSide({ dataIconFront, dataIconBack, dataIconOther, dataProjects }: Props) {
    return (
        <>
            <HeaderSection />
            <AboutSection />
            <SkillsSection
                dataIconFront={dataIconFront}
                dataIconBack={dataIconBack}
                dataIconOther={dataIconOther}
            />
            <ProjectsSection dataProjects={dataProjects} />
        </>
    )
}