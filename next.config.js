/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'carpet.craft-together-mc.de',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig