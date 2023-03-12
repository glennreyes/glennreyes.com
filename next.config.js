const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // Rust-based MDX compiler turned off because it doesn't support remark plugins yet.
    mdxRs: false,
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
