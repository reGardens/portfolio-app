import { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
    className?: string;
    darkMode?: boolean;
}

export function Typography({
    children,
    size = "base",
    weight = "normal",
    className = "",
    darkMode = true
}: TypographyProps) {
    const darkModeClass = darkMode ? "dark:text-white" : "";

    const sizeStyles = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
    };

    const weightStyles = {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
    };

    const combinedClassName = `${sizeStyles[size]} ${weightStyles[weight]} ${darkModeClass} ${className}`.trim();

    return <p className={combinedClassName}>{children}</p>;
}
