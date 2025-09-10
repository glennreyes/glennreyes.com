import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Include content files in the build output for Vercel deployment
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
  },
  redirects: () =>
    Promise.resolve([
      {
        destination:
          'https://glennreyes.notion.site/Tools-6df9f0a402784ef7a093452d464e793e',
        permanent: false,
        source: '/tools',
      },
    ]),
};

export default nextConfig;
