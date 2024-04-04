// test 3
// pages/products/[id].js
import MediaComponentDesktop from '@/app/components/(projects)/mediaComponentDesktop/page';
import MediaComponentMobile from '@/app/components/(projects)/mediaComponentMobile/page';
import MediaComponentTablet from '@/app/components/(projects)/mediaComponentTablet/page';
import { promises as fs } from 'fs';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import path from 'path';

interface PorjectsData {
    name: string;
    description: string;
    projectBackground: string;
    desktopView: string;
    tabletView: string;
    mobileView: string;
    hashtags: string;
    logo: string;
}
interface Hashtags {
    name: string;
    link: string;
}

export default function Page({ dataProjects }: any) {
    console.log('testtttt', dataProjects);

    return (
        // <main>
        //     {typeof window !== "undefined" && window.innerWidth > 1024 ? (
        //         // desktop view
        //         <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
        //             {dataProjects.map((res: PorjectsData, index: number) => {
        //                 console.log(typeof(res));
        //                 return (
        //                     <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
        //                         <div className="w-full h-full col-start-1 col-span-3 relative">
        //                             <MediaComponentDesktop url={res.desktopView} name={res.name} desktop={"desktop"} />
        //                             <MediaComponentTablet name={res.name} url={res.tabletView} tablet={"tablet"} />
        //                             <MediaComponentMobile name={res.name} url={res.mobileView} mobile={"mobile"} />
        //                         </div>

        //                         <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10 -z-10 ml-3">
        //                             <p className="uppercase font-extrabold text-xl tracking-wider">{res.name}</p>
        //                             <ul className="mb-3">
        //                                 {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
        //                                     return (
        //                                         <li key={ress.name} className="inline-block mr-1.5 italic">
        //                                             <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">{ress.name}</p>
        //                                         </li>
        //                                     )
        //                                 })}
        //                             </ul>
        //                             <p className="font-bold text-lg text-darkColor200 tracking-wider">{res.description}</p>
        //                         </div>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     ) : (
        //         // mobile view
        //         <div className="block lg:hidden w-full max-w-md bg-white rounded-lg sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
        //             <div className="flow-root">
        //                 <ul role="list" className="relative projects">
        //                     {dataProjects.map((res: PorjectsData, index: number) => {
        //                         return (
        //                             <li key={index} className="py-3 sm:py-4 relative">
        //                                 <div className="flex items-center relative cards opacity-0 -translate-y-10">
        //                                     <div className="flex-shrink-0 rounded-full !overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
        //                                         <Image width={56} height={55} style={{ objectFit: "cover", alignSelf: "center" }} src={res.logo} alt="Neil image" />
        //                                     </div>
        //                                     <div className="flex-1 min-w-0 ms-4 mr-[10px]">
        //                                         <p className="text-xs text-darkColor500 dark:text-white truncate font-semibold opacity-40">
        //                                             {res.name}
        //                                         </p>
        //                                         <p className="text-sm text-darkColor200 dark:text-slate-200 truncate font-semibold">
        //                                             {res.description}
        //                                         </p>
        //                                     </div>
        //                                 </div>
        //                             </li>
        //                         )
        //                     })}
        //                 </ul>
        //             </div>
        //         </div>
        //     )}
        // </main>

        <div>
            <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
                {/* {projects.map((res: PorjectsData, index: number) => {
                    console.log('dataporject', res);
                    return (
                        <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
                            <div className="w-full h-full col-start-1 col-span-3 relative">
                                <MediaComponentDekstop name={res.name} url={res.desktopView} desktop={"desktop"} tablet={"null"} mobile={"null"} />
                                <MediaComponentTablet name={res.name} url={res.tabletView} desktop={"null"} tablet={"tablet"} mobile={"null"} />
                                <MediaComponentMobile name={res.name} url={res.mobileView} desktop={"null"} tablet={"null"} mobile={"mobile"} />
                            </div>

                            <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10">
                                <p className="uppercase font-extrabold text-xl mb-3">{res.name}</p>
                                <p className="font-bold text-lg text-darkColor200 mb-3">{res.description}</p>
                                <ul>
                                    {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
                                        // console.log('hashtag', ress);
                                        return (
                                            <li key={ress.name} className="inline-block rounded-full bg-traditionalColor500 mr-0.5">
                                                <p className="py-2 px-8 leading-none text-white font-bold text-xs">{ress.name}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })} */}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const getProjects = await fs.readFile(process.cwd() + '/public/static/dataProjects.json', 'utf8');
    const dataProjects = await JSON.parse(getProjects);
    // const getProjects = await fetch('https://jsonplaceholder.typicode.com/users')
    // const dataProjects = await getProjects.json()

    // if (!dataProjects) {
    //     return {
    //         notFound: true,
    //     }
    // }

    // const projects = dataProjects.slice(-3);
    // console.log('getProjects', getProjects);

    return {
        props: {
            dataProjects,
        }
    };
}


// test 2
// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import { promises as fs } from 'fs';
// import HomeClientSide from '@/app/(pages)/home/HomeClientSide';
// import MediaComponentDesktop from '@/app/components/(projects)/mediaComponentDesktop/page';
// import MediaComponentTablet from '@/app/components/(projects)/mediaComponentTablet/page';
// import MediaComponentMobile from '@/app/components/(projects)/mediaComponentMobile/page';
// import Image from 'next/image';

// type Repo = {
//     name: string
//     stargazers_count: number
// }
// interface Item {
//     name: string,
// }
// type Props = {
//     dataProjects: any;
// }
// interface PorjectsData {
//     name: string;
//     description: string;
//     projectBackground: string;
//     desktopView: string;
//     tabletView: string;
//     mobileView: string;
//     hashtags: string;
//     logo: string;
// }
// interface Hashtags {
//     name: string;
//     link: string;
// }

// // posts will be populated at build time by getStaticProps()
// export default function Page({ posts }: any) {
//     console.log('data', posts);

//     return (
//         <ul>
//             {posts.map((post: any) => (
//                 <li key={post}>{post.title}</li>
//             ))}
//         </ul>
//         // <main>
//         //     {typeof window !== "undefined" && window.innerWidth > 1024 ? (
//         //         // desktop view
//         //         <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
//         //             {dataProjects?.map((res: PorjectsData, index: number): any => {
//         //                 // console.log(typeof(res.desktopView));
//         //                 return (
//         //                     <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
//         //                         <div className="w-full h-full col-start-1 col-span-3 relative">
//         //                             <MediaComponentDesktop url={res.desktopView} name={res.name} desktop={"desktop"} />
//         //                             <MediaComponentTablet name={res.name} url={res.tabletView} tablet={"tablet"} />
//         //                             <MediaComponentMobile name={res.name} url={res.mobileView} mobile={"mobile"} />
//         //                         </div>

//         //                         <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10 -z-10 ml-3">
//         //                             <p className="uppercase font-extrabold text-xl tracking-wider">{res.name}</p>
//         //                             <ul className="mb-3">
//         //                                 {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
//         //                                     return (
//         //                                         <li key={ress.name} className="inline-block mr-1.5 italic">
//         //                                             <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">{ress.name}</p>
//         //                                         </li>
//         //                                     )
//         //                                 })}
//         //                             </ul>
//         //                             <p className="font-bold text-lg text-darkColor200 tracking-wider">{res.description}</p>
//         //                         </div>
//         //                     </li>
//         //                 )
//         //             })}
//         //         </ul>
//         //     ) : (
//         //         // mobile view
//         //         <div className="block lg:hidden w-full max-w-md bg-white rounded-lg sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
//         //             <div className="flow-root">
//         //                 <ul role="list" className="relative projects">
//         //                     {dataProjects.map((res: PorjectsData, index: number) => {
//         //                         return (
//         //                             <li key={index} className="py-3 sm:py-4 relative">
//         //                                 <div className="flex items-center relative cards opacity-0 -translate-y-10">
//         //                                     <div className="flex-shrink-0 rounded-full !overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
//         //                                         {/* <img className="w-10 h-10 rounded-full object-cover bg-white" src={res.logo} alt="Neil image" /> */}
//         //                                         <Image width={56} height={55} style={{ objectFit: "cover", alignSelf: "center" }} src={res.logo} alt="Neil image" />
//         //                                     </div>
//         //                                     <div className="flex-1 min-w-0 ms-4 mr-[10px]">
//         //                                         <p className="text-xs text-darkColor500 dark:text-white truncate font-semibold opacity-40">
//         //                                             {res.name}
//         //                                         </p>
//         //                                         <p className="text-sm text-darkColor200 dark:text-slate-200 truncate font-semibold">
//         //                                             {res.description}
//         //                                         </p>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>
//         //                         )
//         //                     })}
//         //                 </ul>
//         //             </div>
//         //         </div>
//         //     )}
//         // </main>
//     )
// }

// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const posts = await res.json()
//     // const projects = await fs.readFile(process.cwd() + '/public/static/dataProjects.json', 'utf8');
//     // const dataProjects = await JSON.parse(projects);

//     return {
//         props: {
//             // dataProjects,
//             posts,
//         },
//     }
// }

// test 1
// export const getStaticProps = (async (context) => {
//     const projects = await fs.readFile(process.cwd() + '/public/static/dataProjects.json', 'utf8');
//     const dataProjects = await JSON.parse(projects);

//     return (
//         props: { dataProjects: any }
//     )

// }) satisfies GetStaticProps<{
//         props: Props
//     }>

// export default function Page({ props }: InferGetStaticPropsType<typeof getStaticProps>) {
//     return (
//         <main>
//             {typeof window !== "undefined" && window.innerWidth > 1024 ? (
//                 // desktop view
//                 <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
//                     {props.dataProjects?.map((res: PorjectsData, index: number): any => {
//                         // console.log(typeof(res.desktopView));
//                         return (
//                             <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
//                                 <div className="w-full h-full col-start-1 col-span-3 relative">
//                                     <MediaComponentDesktop url={res.desktopView} name={res.name} desktop={"desktop"} />
//                                     <MediaComponentTablet name={res.name} url={res.tabletView} tablet={"tablet"} />
//                                     <MediaComponentMobile name={res.name} url={res.mobileView} mobile={"mobile"} />
//                                 </div>

//                                 <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10 -z-10 ml-3">
//                                     <p className="uppercase font-extrabold text-xl tracking-wider">{res.name}</p>
//                                     <ul className="mb-3">
//                                         {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
//                                             return (
//                                                 <li key={ress.name} className="inline-block mr-1.5 italic">
//                                                     <p className="leading-none text-darkColor500 dark:text-white text-xs font-extrabold opacity-50 tracking-wider">{ress.name}</p>
//                                                 </li>
//                                             )
//                                         })}
//                                     </ul>
//                                     <p className="font-bold text-lg text-darkColor200 tracking-wider">{res.description}</p>
//                                 </div>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             ) : (
//                 // mobile view
//                 <div className="block lg:hidden w-full max-w-md bg-white rounded-lg sm:p-8 dark:bg-darkColor500 overflow-hidden p-m-s mb-10">
//                     <div className="flow-root">
//                         <ul role="list" className="relative projects">
//                             {dataProjects.map((res: PorjectsData, index: number) => {
//                                 return (
//                                     <li key={index} className="py-3 sm:py-4 relative">
//                                         <div className="flex items-center relative cards opacity-0 -translate-y-10">
//                                             <div className="flex-shrink-0 rounded-full !overflow-hidden h-[55px] w-[56px] grid relative border border-traditionalColor500">
//                                                 {/* <img className="w-10 h-10 rounded-full object-cover bg-white" src={res.logo} alt="Neil image" /> */}
//                                                 <Image width={56} height={55} style={{ objectFit: "cover", alignSelf: "center" }} src={res.logo} alt="Neil image" />
//                                             </div>
//                                             <div className="flex-1 min-w-0 ms-4 mr-[10px]">
//                                                 <p className="text-xs text-darkColor500 dark:text-white truncate font-semibold opacity-40">
//                                                     {res.name}
//                                                 </p>
//                                                 <p className="text-sm text-darkColor200 dark:text-slate-200 truncate font-semibold">
//                                                     {res.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </main>
//     )
// }