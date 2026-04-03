import Image from "next/image";
import React from "react";

export default function MediaComponentMobile({ url, name }: any) {
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
            <video autoPlay loop muted className="w-full h-full object-contain">
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
};
