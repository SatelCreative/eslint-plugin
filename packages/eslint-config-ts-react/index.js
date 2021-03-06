module.exports =  {
  parser:  '@typescript-eslint/parser',
  plugins: ['prettier'],
  extends:  [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier', 
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  env: {
    browser: true,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      parser: 'typescript',
    }],

    // Airbnb fixes
    'consistent-return': 0, // Typescript will handle this
    'import/no-unresolved': 0, // Does not detect index.ts in folders
    'import/extensions': 0, // Typescript can check this for us most of the time
    'react/static-property-placement': 0, // Don't like it
    'react/jsx-props-no-spreading': 0, // Typescript will handle this
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

    // and the award for dumbest rule goes to...
    // it changes how and where the error is bubbled
    'no-return-await': 0,

    // Typescript draconian rules
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0 // Silly for react data flow
  },
};