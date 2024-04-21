/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  redirects: () => [
    {
      destination:
        'https://glennreyes.notion.site/Tools-6df9f0a402784ef7a093452d464e793e',
      permanent: false,
      source: '/tools',
    },
  ],
};

export default nextConfig;
