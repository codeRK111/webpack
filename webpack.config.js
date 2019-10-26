const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
     entry : "./src/index.js",
     output : {
          filename: "bundle.js",
          path: path.resolve(__dirname, "./dist"),
          publicPath: "dist/"
     },
     mode: "none",
     module: {
          rules: [
               {
                    test: /\.(png|jpg)$/,
                    use: ["file-loader"]
               },
               {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                         presets: ['@babel/preset-env'],
                         plugins: ['transform-class-properties']
                    }
               },
               {
                    test: /\.css$/,
                    use: [ {
                         loader: MiniCssExtractPlugin.loader,
                         options: {
                           // you can specify a publicPath here
                           // by default it uses publicPath in webpackOptions.output
                           publicPath: 'dist/css/',
                         },
                       },'css-loader']
               },
               {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
               }
          ]
     },
     plugins: [
          new TerserPlugin(),
          new MiniCssExtractPlugin({
               filename: 'style.css',
             }),
     ]
}