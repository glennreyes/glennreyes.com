/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ['**/.*'],

  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.ts',
  serverBuildPath: 'api/index.cjs',
  serverBuildTarget: 'vercel',
};
