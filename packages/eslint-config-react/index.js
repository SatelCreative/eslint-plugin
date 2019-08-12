module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
    }],

    // Support js files for jsx syntax
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0
  },
};