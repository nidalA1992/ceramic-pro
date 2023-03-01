const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'pages', 'home', 'index.ts'),
    aboutus: path.resolve(__dirname, 'src', 'pages','aboutus', 'index.ts'),
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    // publicPath: "/",
    clean: true,
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
      filename: "home/index.html",
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
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