// import { useState } from "react";

interface TitleProps {
    [title: string]: any;
    darkText: string;
}

export default function Title({ title, darkText }: TitleProps) {
    // const [data, setData] = useState<TitleProps[]>([])
    return <p className={`dark:text-white ${darkText} text-5xl font-extrabold text-darkColor500 col-span-1 mb-4 lg:mb-0`}>{title}</p>
}