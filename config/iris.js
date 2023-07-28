const irisConfig = require('../env.config');
const _ = require('lodash');

const defaultConfig = {
  define: {},
  shouldUseSourceMap: true,
  codeSplitting: false,
  shouldInlineRuntimeChunk: false,
};
module.exports = _.merge(defaultConfig, irisConfig);
