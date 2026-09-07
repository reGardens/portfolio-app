export interface Hashtag {
    name: string;
    link: string;
}

export interface ProjectData {
    name: string;
    slug: string;
    description: { en: string; id: string };
    image: string | null;
    desktopView: string | null;
    tabletView: string | null;
    mobileView: string | null;
    logo: string;
    url: string | null;
    hashtags: Hashtag[];
}

export interface SkillIcon {
    icon: string;
    name: string;
}

export interface SkillGroup {
    name: string;
    data: SkillIcon[];
}
