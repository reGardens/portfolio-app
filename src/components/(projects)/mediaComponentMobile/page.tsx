import Image from "next/image";
import React from "react";

interface MediaProps {
    url: string | null;
    name: string;
}

export default function MediaComponentMobile({ url, name }: MediaProps) {
    if (url == null) return null;

    if (url.endsWith(".png") || url.endsWith(".webp") || url.endsWith(".jpg") || url.endsWith(".jpeg")) {
        return (
            <div className="absolute -bottom-20 right-52 w-[180px] h-[22rem] overflow-hidden">
                <Image src={url} alt={name} fill sizes="180px" className="object-contain object-bottom" />
            </div>
        );
    }

    return (
        <div className="absolute -bottom-20 right-52 w-[180px] h-[22rem] overflow-hidden">
            <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-contain">
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
};
