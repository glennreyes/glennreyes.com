import type { NextConfig } from 'next';

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
    viewTransition: true,
  },
  headers() {
    return Promise.resolve([
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://giscus.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-analytics.com https://giscus.app; frame-src https://giscus.app; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]);
  },
  // Include content files in the build output for Vercel deployment
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
  },
  reactCompiler: {
    compilationMode: 'all',
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
  rewrites: () =>
    Promise.resolve([
      {
        source: '/photo.jpg',
        destination: '/photo',
      },
    ]),
};

export default withBundleAnalyzer(nextConfig);
