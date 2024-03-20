// import Image from "next/image";
// import React from "react";

// interface Props {
//     url: string;
//     name: string;
//     mobile: string;
// }

// export default function MediaComponentMobile({ url, name, mobile }: Props) {
//     const isImage = url;

//     if (isImage && isImage.endsWith(".png")) {
//         return (
//             <div className={`${mobile} opacity-0 -translate-y-10 absolute -bottom-20 -right-20 w-[156px] h-[19rem] bg-darkColor500 rounded-3xl overflow-hidden`}>
//                 <Image
//                     src={`${url}`}
//                     alt={name}
//                     fill
//                     className="rounded-3xl border object-cover"
//                 />;
//             </div>
//         )
//     }

//     return (
//         <div className={`${mobile} opacity-0 -translate-y-10 absolute -bottom-10 -right-10`}>
//             <video autoPlay loop muted className="h-[20rem] rounded-3xl border overflow-hidden bg-darkColor500">
//                 <source src={`${url}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// };

// // MediaComponent.tsx

// // import Image from "next/image";
// // import React from "react";

// // interface MediaProps {
// //     url: string;
// //     // name: string;
// //     variant: "desktop" | "tablet" | "mobile";
// //     isVideo?: boolean;
// // }

// // const MediaComponent = ({ url, variant, isVideo }: MediaProps) => {
// //     const isImage = url.endsWith(".png");

// //     const containerClassName = `opacity-0 -translate-y-10 absolute`;
// //     const mediaClassName = `rounded-3xl border overflow-hidden bg-darkColor500`;

// //     return (
// //         <div className={`${containerClassName} -bottom-10 -right-10`}>
// //             {isImage ? (
// //                 <div className={`${variant} w-[35rem] h-[25rem] relative rounded-xl overflow-hidden`}>
// //                     <Image src={url} fill className="object-cover" />
// //                 </div>
// //             ) : (
// //                 <video autoPlay loop muted className={`${variant} h-[25rem] ${mediaClassName}`}>
// //                     <source src={url} type="video/mp4" />
// //                     Your browser does not support the video tag.
// //                 </video>
// //             )}
// //         </div>
// //     );
// // };

// // export default MediaComponent;
