var path = require('path'); 
var webpack = require('webpack');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: '.tmp/scripts/bundle.js'
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
}