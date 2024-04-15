"use client"

import Image from "next/image";
import React from "react";

export default function MediaComponentDesktop({ url, name }: any) {
    const isImage = url;

    if (url == null) {
        return (
            <div className={`w-full h-[35rem] relative rounded-xl overflow-hidden border-[0.5px] border-white`}>
                <Image
                    src={'/static/default/default-image.png'}
                    alt={'default-image'}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
        )
    } else {
        if (isImage && isImage.endsWith(".png")) {
            console.log(typeof (url));

            return (
                <div className={`w-full h-[35rem] relative rounded-xl overflow-hidden`}>
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
                <video autoPlay loop muted className={`md:basis-[120px] w-full h-full`}>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
    }
};