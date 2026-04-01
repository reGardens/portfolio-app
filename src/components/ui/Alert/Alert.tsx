import { ReactNode } from "react";
import { Typography } from "@/components/ui";

interface AlertProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    variant?: "warning" | "info" | "error" | "success";
    className?: string;
}

const variantStyles = {
    warning: "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
    info: "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-300",
    error: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-300",
    success: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-300",
};

export default function Alert({ title, subtitle, children, variant = "warning", className = "" }: AlertProps) {
    return (
        <div
            className={`fixed w-full z-30 top-0 left-0 flex items-center justify-center p-4 text-sm rounded-b-lg ${variantStyles[variant]} ${className}`}
            role="alert"
        >
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <Typography variant="body-s" className="sr-only">Info</Typography>
            <div>
                <Typography variant="body-s" fontWeight="medium" className="text-center inline">{title}</Typography>
                {subtitle && <> <Typography variant="body-s" className="inline">{subtitle}</Typography></>}
                {children}
            </div>
        </div>
    );
}
