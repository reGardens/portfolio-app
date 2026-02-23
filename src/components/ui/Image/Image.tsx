import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'loading'> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export default function OptimizedImage({
    src,
    alt,
    className = "",
    priority = false,
    ...props
}: OptimizedImageProps) {
    // If priority is true, don't set loading (Next.js will handle it)
    // If priority is false, use lazy loading
    const imageProps = priority
        ? { priority: true }
        : { loading: "lazy" as const };

    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            {...imageProps}
            {...props}
        />
    );
}
