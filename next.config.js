/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        URL: process.env.URL
    },
    images: {
        domains: ['i.ibb.co', 'nikitaefremov.ru']
    }
};

module.exports = nextConfig;
