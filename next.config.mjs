/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: '.',
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },

    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material', 'gsap'],
    },

    images: {
        formats: ['image/webp', 'image/avif'],
    },
};

export default nextConfig;
