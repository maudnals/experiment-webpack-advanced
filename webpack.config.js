const commonConfig = require('./build-utils/webpack.common');

module.exports = function(env) {
  console.log('env =', env);
  return commonConfig;
}