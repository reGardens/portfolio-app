import Image from "next/image";
import React from "react";

interface dataMediaProps {
    url: any;
    name: string;
    desktop: string;
    tablet: string;
    mobile: string;
}

export const MediaComponentDekstop = ({ url, name, desktop }: dataMediaProps) => {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        return (
            <div className={`w-full h-[35rem] relative rounded-xl overflow-hidden ${desktop} opacity-0 -translate-y-10`}>
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
    }

    return (
        <video autoPlay loop muted className={`md:basis-[120px] w-full h-full ${desktop} opacity-0 -translate-y-10`}>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export const MediaComponentTablet = ({ url, name, tablet }: dataMediaProps) => {
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

export const MediaComponentMobile = ({ url, name, mobile }: dataMediaProps) => {
    const isImage = url;

    if (isImage && isImage.endsWith(".png")) {
        return (
            <div className={`${mobile} opacity-0 -translate-y-10 absolute -bottom-20 -right-20 w-[156px] h-[19rem] bg-darkColor500 rounded-3xl overflow-hidden`}>
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
        <div className={`${mobile} opacity-0 -translate-y-10 absolute -bottom-10 -right-10`}>
            <video autoPlay loop muted className="h-[20rem] rounded-3xl border overflow-hidden bg-darkColor500">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
