/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      destination:
        'https://www.notion.so/glennreyes/Tools-6df9f0a402784ef7a093452d464e793e',
      source: '/tools',
    },
  ],
};

export default nextConfig;
