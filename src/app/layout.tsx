import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/main.css";

// Components
import Footer from "@/components/layout/footer/page";
import Navigation from "@/components/layout/navigation/page";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Script from "next/script";
import ScrollToTop from "@/components/ui/ScrollToTop/ScrollToTop";
import SmoothScroll from "@/components/ui/SmoothScroll/SmoothScroll";
import LoadingScreen from "@/components/ui/LoadingScreen/LoadingScreen";
import RouteChangeListener from "@/components/ui/LoadingScreen/RouteChangeListener";

{/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" /> */ }

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rezabaguspratama.com"),
  title: {
    absolute: "",
    default: "Portfolio | Reza Bagus Pratama",
    template: "%s | Portfolio | Reza Bagus Pratama",
  },
  description:
    "Portfolio of Reza Bagus Pratama, a Full Stack and Front End Developer specializing in building modern, responsive web applications with React and Next.js.",
  keywords: [
    "portfolio",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "Reza Bagus Pratama",
  ],
  authors: [{ name: "Reza Bagus Pratama" }],
  creator: "Reza Bagus Pratama",
  icons: {
    icon: "/static/icons/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Reza Bagus Pratama Portfolio",
    title: "Portfolio | Reza Bagus Pratama",
    description:
      "Portfolio of Reza Bagus Pratama, a Full Stack and Front End Developer specializing in building modern, responsive web applications with React and Next.js.",
    images: [
      {
        url: "/static/images/user-image.png",
        width: 672,
        height: 672,
        alt: "Reza Bagus Pratama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Reza Bagus Pratama",
    description:
      "Portfolio of Reza Bagus Pratama, a Full Stack and Front End Developer specializing in building modern, responsive web applications with React and Next.js.",
    images: ["/static/images/user-image.png"],
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script id="theme-init" strategy="beforeInteractive">
            {`(function() {
              const theme = localStorage.getItem('color-theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();`}
          </Script>
        </head>

        <body className={`${inter.className} bg-white dark:bg-darkColor500`} suppressHydrationWarning>
          <LanguageProvider>
            <SmoothScroll />
            <LoadingScreen />
            <RouteChangeListener />
            <div className="max-w-screen-2xl mx-auto !overflow-x-hidden">
              <Navigation />

              {children}

              <Footer />
            </div>
            <ScrollToTop />
          </LanguageProvider>

          {/* <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
        </body>
      </html>
    </>
  );
}
