import type { NextConfig } from 'next';

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: 'incremental',
    viewTransition: true,
  },
  // Include content files in the build output for Vercel deployment
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
  },
  reactCompiler: {
    compilationMode: 'annotation', // Opt-in mode - only compile files with 'use memo' directive
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

export default withBundleAnalyzer(nextConfig);
