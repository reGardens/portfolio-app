import Image from "next/image";
import React from "react";

export default function MediaComponentTablet({ url, name }: any) {
    if (url == null) return null;

    if (url.endsWith(".png") || url.endsWith(".webp") || url.endsWith(".jpg") || url.endsWith(".jpeg")) {
        return (
            <div className="absolute -bottom-10 -right-10 w-[380px] min-h-[32rem] h-[32rem] overflow-hidden">
                <Image src={url} alt={name} fill sizes="380px" className="object-contain object-right-bottom" />
            </div>
        );
    }

    return (
        <div className="absolute -bottom-10 -right-10 w-[380px] min-h-[32rem] h-[32rem] overflow-hidden">
            <video autoPlay loop muted>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
};
