module.exports = {
  env: {
    browser: true,
    jquery: true,
  },

  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 5,
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:es5/no-es2015',
  ],

  plugins: ['@satel', 'es5'],

  rules: {
    // @todo custom no-es6-methods version
    'es5/no-es6-methods': 'off',
    '@satel/jquery-dollar-sign-reference': 'error',
  },
};