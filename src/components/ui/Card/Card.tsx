import Image from "next/image";
import { ReactNode } from "react";
import { Typography } from "../Typography/Typography";

interface CardProps {
    children: ReactNode;
    className?: string;
    shadow?: boolean;
    rounded?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}

interface ProjectCardProps {
    name: string;
    description: string;
    logo: string;
    className?: string;
}

interface ProjectCardDesktopProps {
    name: string;
    description: string;
    hashtags?: Array<{ name: string; link: string }>;
    desktopView: string;
    tabletView: string;
    mobileView: string;
    MediaDesktop: any;
    MediaTablet: any;
    MediaMobile: any;
}

export function Card({
    children,
    className = "",
    shadow = true,
    rounded = true,
    padding = "md"
}: CardProps) {
    const shadowClass = shadow ? "shadow-[0_20px_40px_rgba(0,0,0,0.12)]" : "";
    const roundedClass = rounded ? "rounded-2xl overflow-hidden" : "";

    const paddingStyles = {
        none: "",
        sm: "p-2 lg:p-4",
        md: "p-4 lg:p-8",
        lg: "p-6 lg:p-12",
    };

    const combinedClassName = `bg-white dark:bg-darkColor500 ${shadowClass} ${roundedClass} ${paddingStyles[padding]} ${className}`.trim();

    return <div className={combinedClassName}>{children}</div>;
}

export function ProjectCard({ name, description, logo, className = "" }: ProjectCardProps) {
    return (
        <div className={`flex items-center relative ${className}`}>
            <div className="flex-shrink-0 rounded-full overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
                <Image
                    width={56}
                    height={55}
                    style={{ objectFit: "cover", alignSelf: "center" }}
                    src={logo}
                    alt={name}
                />
            </div>
            <div className="flex-1 min-w-0 ms-4 mr-[10px]">
                <Typography variant="body-s" className="text-darkColor500 dark:text-white truncate font-semibold opacity-40">
                    {name}
                </Typography>
                <Typography variant="body-s" className="text-darkColor200 dark:text-slate-200 truncate font-semibold">
                    {description}
                </Typography>
            </div>
        </div>
    );
}

export function ProjectCardDesktop({
    name,
    description,
    hashtags,
    desktopView,
    tabletView,
    mobileView,
    MediaDesktop,
    MediaTablet,
    MediaMobile,
}: ProjectCardDesktopProps) {
    return (
        <>
            <div className="w-full h-full col-start-1 col-span-3 relative media opacity-0 -translate-y-10 scale-95 transition-all duration-300 ease-out">
                <MediaDesktop url={desktopView} name={name} />
                <MediaTablet name={name} url={tabletView} />
                <MediaMobile name={name} url={mobileView} />
            </div>
            <div className="col-span-2 col-start-4 mt-10 description opacity-0 translate-x-10 scale-95 transition-all duration-300 ease-out -z-10 ml-3">
                <Typography variant="body-l" fontWeight="extrabold" className="uppercase tracking-wider">{name}</Typography>
                <ul className="mb-3">
                    {Array.isArray(hashtags) && hashtags.map((tag) => (
                        <li key={tag.name} className="inline-block mr-1.5 italic">
                            <Typography variant="body-s" fontWeight="extrabold" className="leading-none text-darkColor500 dark:text-white opacity-50 tracking-wider">
                                {tag.name}
                            </Typography>
                        </li>
                    ))}
                </ul>
                <Typography variant="body-l" fontWeight="bold" className="text-darkColor200 tracking-wider">{description}</Typography>
            </div>
        </>
    );
}
