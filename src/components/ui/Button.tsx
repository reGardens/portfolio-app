import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    className?: string;
    target?: "_blank" | "_self";
    disabled?: boolean;
    animate?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    target = "_self",
    disabled = false,
    animate = false,
}: ButtonProps) {
    const baseStyles = "transition-colors font-bold rounded-md inline-flex items-center justify-center";

    const variantStyles = {
        primary: "bg-traditionalColor500 hover:bg-traditionalColor600 text-white shadow-lg",
        secondary: "bg-darkColor500 dark:bg-white hover:bg-darkColor700 dark:hover:bg-slate-200 text-white dark:text-darkColor500 shadow-lg",
        ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-darkColor500 dark:text-white",
        link: "bg-transparent hover:underline text-traditionalColor500",
    };

    const sizeStyles = {
        sm: "py-1 px-3 text-xs",
        md: "py-2 px-4 text-sm lg:text-base",
        lg: "py-3 px-6 text-base lg:text-lg",
    };

    const widthStyle = fullWidth ? "w-full" : "";
    const animateStyle = animate ? "animate-bounce" : "";
    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${animateStyle} ${disabledStyle} ${className}`.trim();

    if (href && !disabled) {
        return (
            <Link href={href} target={target} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} disabled={disabled} className={combinedClassName}>
            {children}
        </button>
    );
}
