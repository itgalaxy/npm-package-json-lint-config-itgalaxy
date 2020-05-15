# npm-package-json-lint-config-itgalaxy

[![NPM version](https://img.shields.io/npm/v/npm-package-json-lint-config-itgalaxy.svg)](https://www.npmjs.org/package/npm-package-json-lint-config-itgalaxy)
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/npm-package-json-lint-config-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/npm-package-json-lint-config-itgalaxy)
[![dependencies Status](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy)
[![devDependencies Status](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy?type=dev)
[![peerDependencies Status](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy/peer-status.svg)](https://david-dm.org/itgalaxy/npm-package-json-lint-config-itgalaxy?type=peer)

## Installation

You'll first need to install [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint):

```shell
$ npm i npm-package-json-lint --save-dev
```

Next, install `npm-package-json-lint-config-itgalaxy`:

```shell
$ npm install npm-package-json-lint-config-itgalaxy --save-dev
```

## Usage

Add the following to your `.npmpackagejsonlintrc.json` or `npmpackagejsonlint.config.js` file:

**.npmpackagejsonlintrc.json**

```json
{
  "extends": "npm-package-json-lint-config-itgalaxy"
}
```

**npmpackagejsonlint.config.js**

```js
module.exports = {
  extends: "npm-package-json-lint-config-itgalaxy",
};
```

If you need to override a rule, your `.npmpackagejsonlintrc.json` or `npmpackagejsonlint.config.js` file should look like the example below. All shared rules will be used, but `license-type` will be turned off.

**npmpackagejsonlint.config.js**

```js
module.exports = {
  extends: "npm-package-json-lint-config-itgalaxy",
  rules: {
    "license-type": "off",
  },
};
```

## FAQ

Q: My package contains only one file (for example: `index.js`)

A: Just use empty array of `files`:

**package.json**

```json
{
  "files": []
}
```

---

Q: Do I need to list all files in `files` field

A: No. Some files always included in package. [More information](https://docs.npmjs.com/files/package.json#files).

---

Q: My package does not contain `js` files, it is just font/image/etc set.

A: Just disable `require-main` rule.

**npmpackagejsonlint.config.js**

```js
module.exports = {
  extends: "npm-package-json-lint-config-itgalaxy",
  rules: {
    "require-main": "off",
  },
};
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
