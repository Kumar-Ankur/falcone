const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "eval-sourcemap",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },

  devServer: {
    port: 8080,
    publicPath: "http://localhost:8080/",
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify("1.2.0"),
      DEBUG: true,
      CODE_FRAGMENT: "80 + 5"
    })
  ]
});
