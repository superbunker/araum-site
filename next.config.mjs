/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export', // This enables static exports

    images: {
        unoptimized: true, // Required for static export
    },
    // If your site will be hosted in a subdirectory, like GitHub Pages project sites
    basePath: process.env.NODE_ENV === 'production' ? '/araum-site' : '',

    trailingSlash: true, // Recommended for static sites


};

  

export default nextConfig;
