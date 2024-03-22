import Image from "next/image";
import React from "react";

export default function MediaComponentTablet({ url, name, tablet }: any) {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        return (
            <div className={`${tablet} opacity-0 -translate-y-10 absolute -bottom-10 -right-10 w-[316px] h-[25rem] bg-darkColor500 rounded-3xl overflow-hidden`}>
                <Image
                    src={url}
                    alt={name}
                    fill
                    className="rounded-3xl border object-cover"
                />;
            </div>
        )
    }

    return (
        <div className={`${tablet} opacity-0 -translate-y-10 absolute -bottom-10 -right-10`}>
            <video autoPlay loop muted className="h-[25rem] rounded-3xl border overflow-hidden bg-darkColor500">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};