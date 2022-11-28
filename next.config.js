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
      ...(process.env.NODE_ENV === 'production'
        ? []
        : [
            {
              hostname: 'picsum.photos',
              protocol: 'https',
            },
          ]),
    ],
  },
};

module.exports = nextConfig;
