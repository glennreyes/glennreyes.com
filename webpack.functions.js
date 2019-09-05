require('dotenv').config();
const nodeExternals = require('webpack-node-externals');

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  externals: [nodeExternals()],
  mode: nodeEnv,
  optimization: { nodeEnv },
};
