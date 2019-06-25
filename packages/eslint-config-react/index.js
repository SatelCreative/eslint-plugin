module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
    }]
  },
};