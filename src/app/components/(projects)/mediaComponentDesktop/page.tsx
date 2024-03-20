import Image from "next/image";
import React from "react";

interface Props {
    url: string;
    name: string;
    desktop: string;
}

export default function MediaComponentDesktop({ url, name, desktop }: Props) {
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

// MediaComponent.tsx

// import Image from "next/image";
// import React from "react";

// interface MediaProps {
//     url: string;
//     // name: string;
//     variant: "desktop" | "tablet" | "mobile";
//     isVideo?: boolean;
// }

// const MediaComponent = ({ url, variant, isVideo }: MediaProps) => {
//     const isImage = url.endsWith(".png");

//     const containerClassName = `opacity-0 -translate-y-10 absolute`;
//     const mediaClassName = `rounded-3xl border overflow-hidden bg-darkColor500`;

//     return (
//         <div className={`${containerClassName} -bottom-10 -right-10`}>
//             {isImage ? (
//                 <div className={`${variant} w-[35rem] h-[25rem] relative rounded-xl overflow-hidden`}>
//                     <Image src={url} fill className="object-cover" />
//                 </div>
//             ) : (
//                 <video autoPlay loop muted className={`${variant} h-[25rem] ${mediaClassName}`}>
//                     <source src={url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             )}
//         </div>
//     );
// };

// export default MediaComponent;
