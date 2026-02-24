import { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
    variant?: "body-s" | "body-m" | "body-l" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontWeight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
    className?: string;
    darkMode?: boolean;
}

export function Typography({
    children,
    size = "base",
    weight = "normal",
    variant,
    fontWeight,
    className = "",
    darkMode = true
}: TypographyProps) {
    const darkModeClass = darkMode ? "dark:text-white" : "";

    // Map variant to size
    const variantSizeMap = {
        "body-s": "text-xs",
        "body-m": "text-sm",
        "body-l": "text-lg",
        "h1": "text-5xl",
        "h2": "text-4xl",
        "h3": "text-2xl",
        "h4": "text-xl",
        "h5": "text-lg",
        "h6": "text-base",
    };

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

    // Use variant if provided, otherwise use size
    const finalSize = variant ? variantSizeMap[variant] : sizeStyles[size];
    // Use fontWeight if provided, otherwise use weight
    const finalWeight = fontWeight ? weightStyles[fontWeight] : weightStyles[weight];

    const combinedClassName = `${finalSize} ${finalWeight} ${darkModeClass} ${className}`.trim();

    return <p className={combinedClassName}>{children}</p>;
}
