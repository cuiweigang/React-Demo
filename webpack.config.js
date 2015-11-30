var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

module.exports = {
  // 表示入口文件
  entry: {
    vendors: ['react', 'react-dom', 'reflux'],
    app: ["./src/Components/App.js"]
  },

  // 表示输出文件
  output: {
    path: path.join(__dirname, "public", "build", "js"),
    publicPath: "build/js",
    filename: "[name].js"
  },
  // We are watching in the gulp.watch, so tell webpack not to watch
  resolve: {
    // Tell webpack to look for required files in bower and node
    modulesDirectories: ['bower_components', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.css/, loader: "style-loader!css-loader"},
      {test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif"},
      {test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg"},
      {test: /\.png/, loader: "url-loader?limit=20000&minetype=image/png"},
      {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel']}
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  target: "web",
  debug: true,
  watch: true
};