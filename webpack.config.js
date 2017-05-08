const { join, resolve } = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const config = require("./config.json");

module.exports = () => ({
  context: resolve(__dirname, config.sourceDirectory),
  devServer: {
    contentBase: resolve(__dirname, config.outputDirectory),
    historyApiFallback: true,
    host: process.env.IP || "0.0.0.0",
    hot: true,
    publicPath: "/",
    stats: "minimal"
  },
  devtool: config.devtool,
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./index.js"
    ]
  },
  module: {
    rules: [
      {
        include: resolve(__dirname, config.sourceDirectory),
        loader: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" }
        ],
        test: /\.css$/
      },
      {
        include: resolve(__dirname, config.sourceDirectory),
        test: /\.(js)$/,
        use: [{ loader: "babel-loader" }]
      },
      {
        enforce: "pre",
        include: resolve(__dirname, config.sourceDirectory),
        test: /\.(js)$/,
        use: "eslint-loader"
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "./dist/media/[name].[ext]" }
          },
          {
            loader: "image-webpack-loader",
            query: {
              interlaced: false,
              optimizationLevel: 7,
              pngquant: { quality: "85-90", speed: 4 },
              progressive: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, config.outputDirectory),
    pathinfo: true,
    publicPath: "/"
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      disable: false,
      filename: "[name].css"
    }),
    new CopyWebpackPlugin([
      { from: config.assetsDirectory, to: config.assetsDirectory }
    ]),
    new HtmlPlugin({
      filename: "index.html",
      template: join(__dirname, config.sourceDirectory, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [".js", ".json"]
  }
});
