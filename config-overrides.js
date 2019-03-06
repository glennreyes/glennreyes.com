const { addBabelPlugin, disableEsLint, override } = require('customize-cra');

module.exports = override(addBabelPlugin('styled-components'), disableEsLint());
