/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({
  path:'./.env'
})

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.seekpng.com',
        port: '',
      },
    ],
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}

module.exports = nextConfig
