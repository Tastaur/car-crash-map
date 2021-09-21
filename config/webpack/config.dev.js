const path = require('path');
const webpackMerge = require('webpack-merge').merge;

const rulesConfig = require('./rules/rules.config');
const resolveConfig = require('./resolve/resolve.config');
const optimiztaionConfig = require('./optimiaztion/optimization.dev.config');
const serverConfig = require('./server/server.config.dev');
const pluginsConfig = require('./plugins/plugins.config.dev');


const entryPath = path.join(process.cwd(), 'src/index.tsx');
const outputPath = path.join(process.cwd(), 'build');


module.exports = webpackMerge(
  resolveConfig,
  rulesConfig,
  optimiztaionConfig,
  serverConfig,
  pluginsConfig,
  {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devtool: 'source-map',
    entry: {
      main: ['@babel/polyfill', entryPath],
    },
    output: {
      filename: '[name].[contenthash].js',
      path: outputPath,
    },
  },
);
