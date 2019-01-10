const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'index.html',
  filename: "index.html"
});

const BundleAnalyze = new WebpackBundleAnalyzer({
  generateStatsFile: true,
  analyzerMode: "disabled"
});

/**
 * Webpack Configuration
 */

module.exports = {
  /**
   * webpack 4 there is no need to define the entry point: it will take ./src/index.js as the default!
   */
  entry: {
    main: ['./src/index.js','./sass/main.scss',],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".otf", ".png",".ico",".scss"]
  },

  plugins: [
    htmlPlugin,
    BundleAnalyze,
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          compact: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(svg|png|gif|jpg|ico)$/,
        loader: 'file-loader'
    },
    ]
  },
};
