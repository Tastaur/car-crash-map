const path = require('path');
const webpackMerge = require('webpack-merge').merge;

const rulesConfig = require('./rules/rules.config.js');
const resolveConfig = require('./resolve/resolve.config.js');
const optimiztaionConfig = require('./optimiaztion/optimization.prod.config');
const serverConfig = require('./server/server.config.prod');
const pluginsConfig = require('./plugins/plugins.config.prod');
const entryPath = path.join(process.cwd(), 'src/index.tsx');

module.exports = webpackMerge(
    resolveConfig,
    rulesConfig,
    optimiztaionConfig,
    serverConfig,
    pluginsConfig,
    {
        context: path.resolve(__dirname, 'src'),
        mode: 'production',
        devtool: false,
        entry: {
            main: ['@babel/polyfill', entryPath],
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.join(process.cwd(), 'build'),
        },
    },
);
