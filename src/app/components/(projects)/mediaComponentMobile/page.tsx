import Image from "next/image";
import React from "react";

export default function MediaComponentMobile({ url, name, mobile }: any) {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        return (
            <div className={`${mobile} absolute -bottom-20 right-52 w-[156px] h-[19rem] bg-darkColor500 rounded-3xl overflow-hidden shadow-xl opacity-0 -translate-y-10`}>
                <Image
                    src={url}
                    alt={name}
                    fill
                    className="rounded-3xl border object-cover"
                />;
            </div>
        )
    } else {
        return (
            <div className={`${mobile} absolute -bottom-20 right-52 w-[156px] h-[19rem] rounded-3xl border overflow-hidden bg-darkColor500 shadow-xl opacity-0 -translate-y-10`}>
                <video autoPlay loop muted>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
};