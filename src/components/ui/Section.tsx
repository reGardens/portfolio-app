import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    background?: "transparent" | "white" | "dark";
}

export default function Section({
    children,
    id,
    className = "",
    padding = "lg",
    background = "transparent"
}: SectionProps) {
    const paddingStyles = {
        none: "",
        sm: "px-4 lg:px-12 py-8 lg:py-16",
        md: "px-4 lg:px-16 py-16 lg:py-24",
        lg: "px-4 lg:px-24 py-24 lg:py-32",
        xl: "px-4 lg:px-32 py-32 lg:py-40",
    };

    const backgroundStyles = {
        transparent: "",
        white: "bg-white dark:bg-darkColor500",
        dark: "bg-darkColor500 dark:bg-black",
    };

    const combinedClassName = `${paddingStyles[padding]} ${backgroundStyles[background]} ${className}`.trim();

    return (
        <section id={id} className={combinedClassName}>
            {children}
        </section>
    );
}
