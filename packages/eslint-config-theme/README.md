# Satel shopify theme eslint config

For more general documentation on using and configuring eslint please see the root of this repo [here](https://github.com/SatelCreative/eslint-plugin)

## Installation

First, make sure you have [Node.js](https://nodejs.org/en/download/) `v8.10.0` or above installed

```
$ node -v
v8.10.0
```

Next, install `eslint` and `@satel/eslint-config-theme`

**npm**
```
$ npm i eslint @satel/eslint-config-theme --save-dev
```

[**Yarn**](https://yarnpkg.com/en/docs/install)

```
$ yarn add eslint @satel/eslint-config-theme -D
```

*Note* - the above should be run from your project directory

## Configure

Create (or modify) a `.eslintrc` file in the root of your project directory. Then you can use the `extends` property to apply the configuration

```json
{
  "extends": "@satel/theme"
}
```

## Contents
- [eslint-plugin-es5](https://www.npmjs.com/package/eslint-plugin-es5)
- [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html)
- [prettier](https://www.npmjs.com/package/prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)