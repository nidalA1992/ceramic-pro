const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'pages', 'home', 'index.js'),
    aboutus: path.resolve(__dirname, 'src', 'pages','aboutus', 'index.js'),
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'home',
      template: path.join(__dirname, "src", "pages", "home", "index.pug"),
      filename: "index.html",
      chunks: ["home"],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: 'aboutus',
      template: path.join(__dirname, "src", "pages", "aboutus", "index.pug"),
      filename: "aboutus/index.html",
      chunks: ["aboutus"],
      minify: false,
    }),
  ],
  optimization: {
    usedExports: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
};
