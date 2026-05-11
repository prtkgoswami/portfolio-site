/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      if (Array.isArray(config.externals)) {
        config.externals.push("jsdom", "canvas");
      } else {
        config.externals = config.externals || [];
        config.externals.push("jsdom", "canvas");
      }
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to', // Specific host from your error
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com', // Common Medium host
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com', // Dev.to assets host
      },
      // You can also use wildcards for broader support:
      { protocol: 'https', hostname: '**.dev.to' },
      { protocol: 'https', hostname: '**.medium.com' },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  }
};

export default nextConfig;
