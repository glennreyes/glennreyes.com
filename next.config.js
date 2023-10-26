const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
