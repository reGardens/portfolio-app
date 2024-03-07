import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/css/main.css";
import Navigation from "./components/navigation/page";
import "flowbite";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Portfolio | Reza Bagus Pratama",
    template: "%s | Portfolio | Reza Bagus Pratama",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </>
  );
}
