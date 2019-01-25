require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  target: 'serverless',
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    // SVGR for importing SVGs as React components
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
