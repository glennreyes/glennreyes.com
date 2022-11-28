/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 3600,
    remotePatterns: [
      {
        hostname: '**.cdninstagram.com',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
