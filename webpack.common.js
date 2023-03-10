const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src", "pages", "home", "index.js"),
    ion: path.resolve(__dirname, "src", "pages", "ion", "index.js"),
    catalog: path.resolve(__dirname, "src", "pages", "catalog", "index.js"),
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "home",
      template: path.join(__dirname, "src", "pages", "home", "index.pug"),
      filename: "index.html",
      chunks: ["home"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "ion",
      template: path.join(__dirname, "src", "pages", "ion", "index.pug"),
      filename: "ion/index.html",
      chunks: ["ion"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "catalog",
      template: path.join(__dirname, "src", "pages", "catalog", "index.pug"),
      filename: "catalog/index.html",
      chunks: ["catalog"],
      minify: false,
    }),
  ],
  optimization: {
    usedExports: true,
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
