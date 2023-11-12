/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.seekpng.com',
        port: '',
      },
    ],
  },}

module.exports = nextConfig
