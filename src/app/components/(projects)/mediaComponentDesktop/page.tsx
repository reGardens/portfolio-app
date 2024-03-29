"use client"

import Image from "next/image";
import React from "react";

export default function MediaComponentDesktop({ url, name, desktop }: any) {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        console.log(typeof (url));

        return (
            <div className={`${desktop} w-full h-[35rem] relative rounded-xl overflow-hidden opacity-0 -translate-y-10`}>
                <Image
                    src={url}
                    alt={name}
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        )
    } else {
        return (
            <video autoPlay loop muted className={`${desktop} md:basis-[120px] w-full h-full opacity-0 -translate-y-10`}>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
};