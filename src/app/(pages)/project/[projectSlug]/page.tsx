"use client"

import { useSearchParams } from 'next/navigation';

export default function ProjectDetail() {
    const searchParams = useSearchParams();
    const dataString = searchParams?.get('data');
    const data = dataString ? JSON.parse(dataString) : null;

    return (
        <>
            <p className="mt-40">test {data && data.name}</p>
            <p className="h-screent">test {data && data.description}</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nostrum cupiditate facere. Commodi maxime ducimus inventore quisquam ut consequuntur aut, neque dolor fugiat officiis iste incidunt sed necessitatibus magnam numquam?</p> */}
            {/* <p className="h-screen">{data.name}</p> */}
        </>
    )
}