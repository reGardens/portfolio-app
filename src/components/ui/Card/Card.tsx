import Image from "next/image";
import { ReactNode } from "react";

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
    const shadowClass = shadow ? "shadow-2xl" : "";
    const roundedClass = rounded ? "rounded-xl" : "";

    const paddingStyles = {
        none: "",
        sm: "p-2 lg:p-4",
        md: "p-4 lg:p-8",
        lg: "p-6 lg:p-12",
    };

    const combinedClassName = `${shadowClass} ${roundedClass} ${paddingStyles[padding]} ${className}`.trim();

    return <div className={combinedClassName}>{children}</div>;
}

export function ProjectCard({ name, description, logo, className = "" }: ProjectCardProps) {
    return (
        <div className={`flex items-center relative ${className}`}>
            <div className="flex-shrink-0 rounded-full !overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
                <Image
                    width={56}
                    height={55}
                    style={{ objectFit: "cover", alignSelf: "center" }}
                    src={logo}
                    alt={name}
                />
            </div>
            <div className="flex-1 min-w-0 ms-4 mr-[10px]">
                <p className="text-xs text-darkColor500 dark:text-white truncate font-semibold opacity-40">
                    {name}
                </p>
                <p className="text-sm text-darkColor200 dark:text-slate-200 truncate font-semibold">
                    {description}
                </p>
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
            <div className="w-full h-full col-start-1 col-span-3 relative media opacity-0 -translate-y-10">
                <MediaDesktop url={desktopView} name={name} />
                <MediaTablet name={name} url={tabletView} />
                <MediaMobile name={name} url={mobileView} />
            </div>
            <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10 -z-10 ml-3">
                <p className="uppercase font-extrabold text-xl tracking-wider">{name}</p>
                <ul className="mb-3">
                    {Array.isArray(hashtags) && hashtags.map((tag) => (
                        <li key={tag.name} className="inline-block mr-1.5 italic">
                            <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">
                                {tag.name}
                            </p>
                        </li>
                    ))}
                </ul>
                <p className="font-bold text-lg text-darkColor200 tracking-wider">{description}</p>
            </div>
        </>
    );
}
