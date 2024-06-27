/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // remotePatterns: [
        //   {
        //     hostname: 'localhost',
        //     pathname: '**',
        //     port: '3000',
        //     protocol: 'http',
        //   },
        // ],
        loader: 'custom',
        loaderFile: './loader.ts',
    },
};

export default nextConfig;
