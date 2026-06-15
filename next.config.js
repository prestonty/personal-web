/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
