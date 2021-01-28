const path = require('path');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
      publicPath: '/',
      filename: env === 'development' ? 'js/bundle.js' : 'js/bundle.[contenthash].min.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { implementation: require('sass'), sourceMap: true } },
          ]
        },
        {
          // Load all images as base64 encoding if they are smaller than 8192 bytes
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'imgs/[name].[ext]?hash=[hash:20]',
                limit: 8192
              }
            }
          ]
        }
        ,
        {
          // Load all icons
          test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]?hash=[hash:20]',
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),

      new CopyPlugin({
        patterns: [
          { from: "./src/pages/index.html", to: "./index.html" },
          { from: "./static/**/*", to: "./" },
        ],
      }),

      new WebpackBuildNotifierPlugin(),

      new MiniCssExtractPlugin({
        filename: 'css/build.min.css'
      }),
    ],
}
