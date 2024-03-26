import Image from "next/image";
import React from "react";

export default function MediaComponentTablet({ url, name, tablet }: any) {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        return (
            <div className={`${tablet} absolute -bottom-10 -right-10 w-[316px] h-[25rem] bg-darkColor500 rounded-3xl overflow-hidden shadow-xl opacity-0 -translate-y-10`}>
                <Image
                    src={`${url}`}
                    alt={name}
                    fill
                    className="rounded-3xl border object-cover"
                />;
            </div>
        )
    } else {
        return (
            <div className={`${tablet} absolute -bottom-10 -right-10 w-[316px] h-[25rem] rounded-3xl border overflow-hidden bg-darkColor500 shadow-xl opacity-0 -translate-y-10`}>
                <video autoPlay loop muted>
                    <source src={`${url}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
};