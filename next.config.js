const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
