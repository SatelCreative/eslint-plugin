module.exports = {
  rules: {
    'jquery-dollar-sign-reference': require('./lib/rules/jquery-dollar-sign-reference'),
  },
  configs: {
    prettier: require('./lib/config/prettier'),
    liquid: require('./lib/config/liquid'),
    es5: require('./lib/config/es5'),
  },
};