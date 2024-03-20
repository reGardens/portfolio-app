// import Image from "next/image";
// import React from "react";

// interface Props {
//     url: any;
//     name: string;
//     tablet: string;
// }

// export default function MediaComponentTablet({ url, name, tablet }: Props) {
//     const isImage = url;

//     if (isImage && isImage.endsWith(".png")) {
//         return (
//             <div className={`${tablet} opacity-0 -translate-y-10 absolute -bottom-10 -right-10 w-[316px] h-[25rem] bg-darkColor500 rounded-3xl overflow-hidden`}>
//                 <Image
//                     src={url}
//                     alt={name}
//                     fill
//                     className="rounded-3xl border object-cover"
//                 />;
//             </div>
//         )
//     }

//     return (
//         <div className={`${tablet} opacity-0 -translate-y-10 absolute -bottom-10 -right-10`}>
//             <video autoPlay loop muted className="h-[25rem] rounded-3xl border overflow-hidden bg-darkColor500">
//                 <source src={url} type="video/mp4" />
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
