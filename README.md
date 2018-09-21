# Satel ESLint Configurations

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
  "extends": "plugin:@satel/prettier"
}
```

You can also extend multiple of the provided configurations

```json
{
  "extends": [
    "plugin:@satel/prettier",
    "plugin:@satel/liquid"
  ]
}
```

## Ignore Libraries

Create a `.eslintignore` at the root of your project and add any libraries or files that eslint should ignore to it (similar to `.gitignore`)

```
node_modules
src/assets/jquery.js
...
```

## Usage

Run eslint from the command line

**npm**
```
$ npm run eslint src/**/*.js
```

**Yarn**
```
$ yarn eslint src/**/*.js
```

You can also add `--fix` to automatically format / fix some errors

See all options [here](https://eslint.org/docs/user-guide/command-line-interface#options) or run
```
$ yarn eslint --help 
```

I would recommend adding a `lint` npm script. See [here](https://docs.npmjs.com/misc/scripts#examples)

Also consider getting an [editor integration](#editor-integration)

## Suggested Configurations

For legacy Shopify themes:
```json
{
  "extends": [
    "plugin:@satel/es5",
    "plugin:@satel/prettier",
    "plugin:@satel/liquid"
  ]
}
```

## Available Configurations

- `@satel/es5`:
   - Prevents accidental es2015+ feature usage
   - Requires jquery variables to begin with `$`
- `@satel/liquid`:
   - Allows linting `<script>` tags within liquid files
- `@satel/prettier`:
   - Uses [prettier](https://prettier.io/) to auto format your javascript

## Handling Linter Errors

Linters are never perfect and ESLint is no different. Sometimes it can get things wrong. You do have some options however if this happens

### Refactor

It if fairly likely that eslint is upset for a good reason. Before immediately using the escape hatches provided below, try to refactor the code to avoid the error all together.

```javascript
// Before
window.foo = 'bar';

// ...sometime later

baz(window.foo);

// After
const FOO = 'bar';

// ...sometime later

baz(FOO);
```

### Globals

Sometimes there are global variables in your code that you have no control over. In this case you can register the global in `.eslintrc`. `jquery`, for example, is a common use case for this. A side benefit is you end up with a list of the globals in your app.

```json
{
  "globals": {
    "jquery": true,
    "$": true
  }
}
```

### Templates

Sometimes there is more than just javascript in your file. For example in `.liquid` files and eslint will fail to parse. Here are some tricks to avoid this 

**Don't use liquid in javascript**. No seriously, avoid if at all possible

Wrap the liquid in quotes
```
const foo = {{ foo }};   // ERROR
const foo = '{{ foo }}'; // VALID
```

Use the `json` filter (usually better for more complex data)
```
const foo = {{ foo }};        // ERROR
const foo = {{ foo | json }}; // VALID
```

Use javascript to do logical operations
```
{% if foo == true %}
  console.log('yay!')     // ERROR
{% endif %}


const foo = '{{ foo }}';
if (foo === 'true') {     // VALID
  console.log('yay!')
}
```

### Disable

If all else fails you can use comments to let eslint know not to report errors. For example this disables a console warning on the proceeding line

```javascript
// eslint-disable-next-line no-console
console.log(foo)
```

Notice that the name of the error is listed. While not strictly required it is good practice. If you need to disable multiple rules they can be separated with a comma

```javascript
// eslint-disable-next-line no-console, no-undef
console.log(foo)
```

If you absolutely have to you can also disable a block of code

```javascript
/* eslint-disable no-console */
console.log('foo')
console.log('bar')
/* eslint-enable no-console */
```

And yes, the type of comment matters (`//` or `/* */`)

## Editor Integration

### VSCode

Install the `eslint` extension

If you are linting non `.js` files add them to settings
```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "liquid" },
    { "language": "my-language" }
  ]
```
Here we are linting js, jsx, and liquid

If you would like to automatically format javascript on save add
```json
"eslint.autoFixOnSave": true,
```
If it is a different language add it under `eslint.validate` instead
```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "liquid", "autoFix": true },
    { "language": "my-language", "autoFix": true }
  ]
```

You may also want to consider disabling any other js formatters such as the `"editor.formatOnSave"` setting or the `prettier` extension