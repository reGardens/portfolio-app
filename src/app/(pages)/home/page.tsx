import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
};

export default function Home() {
    return (
        <main className="mt-20">
            <p>Home</p>
        </main>
    );
}
