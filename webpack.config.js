const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: 'source-map',
    entry: {
        main: "./src/index.js",
        styles: ["./src/style.scss", "./src/ModalWindow.scss"],
        normalize: './node_modules/normalize.css/normalize.css'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
          {
            test: /\.html$/,
            use: 'html-loader'
          },
          {
            test: /\.(jpg|png|svg|jpeg|gif)$/,
            type: 'asset/resource'
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}