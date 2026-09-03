/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: process.cwd(),
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },

    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material', 'gsap'],
    },

    images: {
        formats: ['image/webp', 'image/avif'],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
