const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['ru']
        }),
        new MiniCssExtractPlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({}),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'src/index.html'),
            minify: {
                collapseWhitespace: false,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(process.cwd(), 'src/favicon.ico'),
                    to: path.join(process.cwd(), './build')
                },
                {
                    from: path.join(process.cwd(), 'src/app.css'),
                    to: path.join(process.cwd(), './build')
                },
                {
                    from: path.join(process.cwd(), 'node_modules/antd/dist/antd.css'),
                    to: path.join(process.cwd(), './build/main.css')
                },
            ],
        }),
    ],
};
