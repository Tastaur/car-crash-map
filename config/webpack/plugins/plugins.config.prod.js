const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['ru']
        }),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'src/index.html'),
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin({}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(process.cwd(), 'src/favicon.ico'),
                    to: path.join(process.cwd(), './build')
                }
            ]
        })
    ],
}
