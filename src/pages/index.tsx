// // pages/products/[id].js

// import { MediaComponentDekstop, MediaComponentMobile, MediaComponentTablet } from '@/app/components/(projects)/mediaComponentDesktop/page';
// import { promises as fs } from 'fs';
// import { GetStaticProps } from 'next';
// import path from 'path';

// interface DataProps {
//     projects: any;
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

// // export async function getStaticPaths() {
// //   const filePath = path.join(process.cwd(), 'data.json');
// //   const jsonData = await fs.promises.readFile(filePath, 'utf-8');
// //   const data = JSON.parse(jsonData);

// //   const paths = data.map(product => ({
// //     params: { id: product.id.toString() }
// //   }));

// //   return { paths, fallback: false };
// // }

// export async function getStaticProps() {
//     const getProjects = await fs.readFile(process.cwd() + '/public/static/dataProjects.json', 'utf8');
//     const dataProjects = await JSON.parse(getProjects);
//     const projects = dataProjects.slice(-3);
//     console.log('getProjects', getProjects);

//     return {
//         props: {
//             projects,
//         }
//     };
// }

// export default function GetProducts({ projects }: DataProps) {
//     // console.log('testtttt', projects.porjects);

//     return (
//         <div>
//             <ul className="hidden lg:block text-darkColor500 dark:text-white p-d-s relative">
//                 {/* {projects.map((res: PorjectsData, index: number) => {
//                     console.log('dataporject', res);
//                     return (
//                         <li key={index} className="grid grid-cols-5 content-center gap-11 mt-32 mb-48 projects">
//                             <div className="w-full h-full col-start-1 col-span-3 relative">
//                                 <MediaComponentDekstop name={res.name} url={res.desktopView} desktop={"desktop"} tablet={"null"} mobile={"null"} />
//                                 <MediaComponentTablet name={res.name} url={res.tabletView} desktop={"null"} tablet={"tablet"} mobile={"null"} />
//                                 <MediaComponentMobile name={res.name} url={res.mobileView} desktop={"null"} tablet={"null"} mobile={"mobile"} />
//                             </div>

//                             <div className="col-span-2 col-start-4 mt-10 description opacity-0 -translate-x-10">
//                                 <p className="uppercase font-extrabold text-xl mb-3">{res.name}</p>
//                                 <p className="font-bold text-lg text-darkColor200 mb-3">{res.description}</p>
//                                 <ul>
//                                     {Array.isArray(res.hashtags) && res.hashtags.map((ress: Hashtags) => {
//                                         // console.log('hashtag', ress);
//                                         return (
//                                             <li key={ress.name} className="inline-block rounded-full bg-traditionalColor500 mr-0.5">
//                                                 <p className="py-2 px-8 leading-none text-white font-bold text-xs">{ress.name}</p>
//                                             </li>
//                                         )
//                                     })}
//                                 </ul>
//                             </div>
//                         </li>
//                     )
//                 })} */}
//             </ul>
//         </div>
//     );
// }