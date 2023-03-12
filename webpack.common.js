const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src", "pages", "home", "index.js"),
    ion: path.resolve(__dirname, "src", "pages", "ion", "index.js"),
    catalog: path.resolve(__dirname, "src", "pages", "catalog", "index.js"),
    product: path.resolve(__dirname, "src", "pages", "product", "index.js"),
    areas: path.resolve(__dirname, "src", "pages", "areas", "index.js"),
    area_page: path.resolve(__dirname, "src", "pages", "area-page", "index.js"),
    map: path.resolve(__dirname, "src", "pages", "map", "index.js"),
    news: path.resolve(__dirname, "src", "pages", "news", "index.js"),
    news_page: path.resolve(__dirname, "src", "pages", "news-page", "index.js"),
    company: path.resolve(__dirname, "src", "pages", "company", "index.js"),
  },
  output: {
    filename: "[name]/Select.js",
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
      title: "area_page",
      template: path.join(__dirname, "src", "pages", "area-page", "index.pug"),
      filename: "areas/area-page/index.html",
      chunks: ["area_page"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "map",
      template: path.join(__dirname, "src", "pages", "map", "index.pug"),
      filename: "map/index.html",
      chunks: ["map"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "news",
      template: path.join(__dirname, "src", "pages", "news", "index.pug"),
      filename: "news/index.html",
      chunks: ["news"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "news_page",
      template: path.join(__dirname, "src", "pages", "news-page", "index.pug"),
      filename: "news/news-page/index.html",
      chunks: ["news_page"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "company",
      template: path.join(__dirname, "src", "pages", "company", "index.pug"),
      filename: "company/index.html",
      chunks: ["company"],
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
