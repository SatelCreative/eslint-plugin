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
    'prettier',
  ],
  plugins: ['@satel', 'es5', 'html', 'prettier'],
  rules: {
    // @todo custom no-es6-methods version
    'es5/no-es6-methods': 'off',
    '@satel/jquery-dollar-sign-reference': 'error',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
    }],
  },
  settings: {
    'html/html-extensions': ['.liquid']
  },
};