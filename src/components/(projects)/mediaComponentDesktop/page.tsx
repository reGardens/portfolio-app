"use client"

import Image from "next/image";
import React from "react";

interface MediaProps {
    url: string | null;
    name: string;
}

export default function MediaComponentDesktop({ url, name }: MediaProps) {
    if (url == null) {
        return (
            <div className="w-full h-[35rem] relative rounded-xl overflow-hidden">
                <Image src="/static/default/default-image.png" alt="default" fill sizes="60vw" style={{ objectFit: 'cover' }} />
            </div>
        );
    }

    if (url.endsWith(".png") || url.endsWith(".webp") || url.endsWith(".jpg") || url.endsWith(".jpeg")) {
        return (
            <div className="w-full h-[35rem] relative rounded-xl overflow-hidden">
                <Image src={url} alt={name} fill sizes="60vw" style={{ objectFit: 'contain' }} />
            </div>
        );
    }

    return (
        <video autoPlay loop muted playsInline preload="none" className="md:basis-[120px] w-full h-full rounded-xl">
            <source src={url} type="video/mp4" />
        </video>
    );
};
