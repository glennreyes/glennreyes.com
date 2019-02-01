require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

module.exports = withTypescript({
  target: 'serverless',
  webpack(config, options) {
    // SVGR for importing SVGs as React components
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });

    // Support importing graphql files
    config.module.rules.push({
      test: /\.graphql$/,
      use: ['graphql-tag/loader'],
    });

    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    // Add both client & server side environment variables
    // Note that these are exposed publicly!
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        GRAPHQL_URL: process.env.GRAPHQL_URL,
      }),
    );

    return config;
  },
});
