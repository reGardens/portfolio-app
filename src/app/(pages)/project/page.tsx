"use client"

import GetProducts from "@/pages";
import { useEffect, useState } from "react";

export default function Project() {
    const [projects, setProjects] = useState([]);

    return (
        <main className="mt-20">
            <GetProducts projects={projects} />
        </main>
    )
}