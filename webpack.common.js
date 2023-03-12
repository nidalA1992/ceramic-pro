const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src", "pages", "home", "index.js"),
    ion: path.resolve(__dirname, "src", "pages", "ion", "index.js"),
    catalog: path.resolve(__dirname, "src", "pages", "catalog", "index.js"),
    product: path.resolve(__dirname, "src", "pages", "product", "index.js"),
    areas: path.resolve(__dirname, "src", "pages", "areas", "index.js"),
    avto_moto: path.resolve(__dirname, "src", "pages", "avto_moto", "index.js"),
    map: path.resolve(__dirname, "src", "pages", "map", "index.js"),
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
    new HtmlWebpackPlugin({
      title: "product",
      template: path.join(__dirname, "src", "pages", "product", "index.pug"),
      filename: "catalog/product/index.html",
      chunks: ["product"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "areas",
      template: path.join(__dirname, "src", "pages", "areas", "index.pug"),
      filename: "areas/index.html",
      chunks: ["areas"],  
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "avto_moto",
      template: path.join(__dirname, "src", "pages", "avto_moto", "index.pug"),
      filename: "areas/avto_moto/index.html",
      chunks: ["avto_moto"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "map",
      template: path.join(__dirname, "src", "pages", "map", "index.pug"),
      filename: "map/index.html",
      chunks: ["map"],
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
