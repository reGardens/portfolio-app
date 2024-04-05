/** @type {import('next').NextConfig} */
const nextConfig = {
    // change default page
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },

    // using promise as fs into getStaticProps
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },

    // reactStrictMode: true,
    // compiler: {
    //     removeConsole: true,
    // },
};

export default nextConfig;