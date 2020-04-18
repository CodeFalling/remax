const cli = require('remax-plugin-cli');
const entries = require('remax-plugin-entries');
const props1 = require('remax-plugin-props1');
const props2 = require('remax-plugin-props2');

module.exports = {
  plugins: [cli(), entries(), props1(), props2()],
};
