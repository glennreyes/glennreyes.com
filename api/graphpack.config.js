require('dotenv').config();
const express = require('express');

const app = express();

module.exports = {
  server: {
    applyMiddleware: { app, path: '/' },
  },
  webpack: ({ config, webpack }) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GOODREADS_KEY: process.env.GOODREADS_KEY,
        GOODREADS_USER_ID: process.env.GOODREADS_USER_ID,
      }),
    ],
  }),
};
