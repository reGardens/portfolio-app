import Image from "next/image";
import React from "react";

export default function MediaComponentMobile({ url, name }: any) {
    const isImage = url;

    if (url == null) {
        return (
            <div className={`absolute -bottom-20 right-52 w-[156px] h-[19rem] bg-darkColor500 rounded-3xl overflow-hidden shadow-xl border-[0.5px]`}>
                <Image
                    src={'/static/default/default-image.png'}
                    alt={'default-image'}
                    fill
                    className="object-cover"
                />
            </div>
        )
    } else {
        if (isImage && isImage.endsWith(".png")) {
            return (
                <div className={`absolute -bottom-20 right-52 w-[156px] h-[19rem] bg-darkColor500 rounded-3xl overflow-hidden shadow-xl`}>
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
                <div className={`absolute -bottom-20 right-52 w-[156px] h-[19rem] rounded-3xl border overflow-hidden bg-darkColor500 shadow-xl`}>
                    <video autoPlay loop muted>
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            );
        }
    }
};