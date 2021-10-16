const path = require('path');
const webpackMerge = require('webpack-merge').merge;

const rulesConfig = require('./rules/rules.config.js');
const resolveConfig = require('./resolve/resolve.config.js');
const optimiztaionConfig = require('./optimiaztion/optimization.prod.config');
const serverConfig = require('./server/server.config.prod');
const pluginsConfig = require('./plugins/plugins.config.prod');

const entryPath = path.join(process.cwd(), 'src/index.tsx');
const outputPath = path.join(process.cwd(), 'build');

module.exports = webpackMerge(
    resolveConfig,
    rulesConfig,
    optimiztaionConfig,
    serverConfig,
    pluginsConfig,
    {
        mode: 'production',
        target: 'browserslist',
        devtool: false,
        entry: {
            main: ['@babel/polyfill', entryPath],
        },
        output: {
            filename: '[name].[contenthash].js',
            path: outputPath,
        },
    },
);
