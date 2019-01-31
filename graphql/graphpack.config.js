const express = require('express');

const app = express();

module.exports = {
  server: {
    applyMiddleware: { app, path: '/' },
  },
};
