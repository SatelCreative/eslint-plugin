# Satel eslint plugin

This plugin contains rules used by the eslint configurations also available in this monorepo. Some of them are custom and some of them are borrowed from other configurations in order to avoid pulling in too many dependencies.

For more general documentation on using and configuring eslint please see the root of this repo [here](https://github.com/SatelCreative/eslint-plugin)

## Installation

First, make sure you have [Node.js](https://nodejs.org/en/download/) `v8.10.0` or above installed

```
$ node -v
v8.10.0
```

Next, install `eslint` and `@satel/eslint-plugin`

**npm**
```
$ npm i eslint @satel/eslint-plugin --save-dev
```

[**Yarn**](https://yarnpkg.com/en/docs/install)

```
$ yarn add eslint @satel/eslint-plugin -D
```

*Note* - the above should be run from your project directory

## Configure

Create (or modify) a `.eslintrc` file in the root of your project directory. Then you can use the `extends` property to apply the configuration

```json
{
  "plugins": "@satel"
}
```

## Available Rules

- `@satel/jquery-dollar-sign-reference`
   - Requires that jquery variables are prefixed with `$`
   - From shopify's [eslint-plugin](https://github.com/Shopify/eslint-plugin-shopify/blob/master/lib/rules/jquery-dollar-sign-reference.js)