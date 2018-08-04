"use strict";

const defaultConfig = {
  extends: "npm-package-json-lint-config-default",
  rules: {
    "require-author": "error",
    "require-bin": "off",
    "require-bugs": "error",
    "require-bundledDependencies": "off",
    "require-config": "off",
    "require-contributors": "error",
    "require-cpu": "off",
    "require-dependencies": "off",
    "require-description": "error",
    "require-devDependencies": "off",
    "require-directories": "off",
    "require-engines": "error",
    "require-files": "error",
    "require-homepage": "error",
    "require-keywords": "error",
    "require-license": "error",
    "require-main": "off",
    "require-man": "off",
    "require-module": "off",
    // Inherited from `npm-package-json-lint-config-default`
    // "require-name": "error",
    "require-optionalDependencies": "off",
    "require-os": "off",
    "require-peerDependencies": "off",
    "require-preferGlobal": "off",
    "require-private": "off",
    "require-publishConfig": "off",
    "require-repository": "error",
    "require-scripts": "off",
    // Inherited from `npm-package-json-lint-config-default`
    // "require-version": "error",

    // Inherited from `npm-package-json-lint-config-default`
    // "bin-type": "error",
    // "config-type": "error",
    // "cpu-type": "error",
    // "dependencies-type": "error",
    // "description-type": "error",
    // "devDependencies-type": "error",
    // "directories-type": "error",
    // "engines-type": "error",
    // "files-type": "error",
    // "homepage-type": "error",
    // "keywords-type": "error",
    // "license-type": "error",
    // "main-type": "error",
    // "man-type": "error",
    // "name-type": "error",
    // "optionalDependencies-type": "error",
    // "os-type": "error",
    // "peerDependencies-type": "error",
    // "preferGlobal-type": "error",
    // "private-type": "error",
    // "repository-type": "error",
    // "scripts-type": "error",
    // "version-type": "error",

    "valid-values-author": "off",
    "valid-values-private": "off",
    "valid-values-license": "off",
    "valid-values-publishConfig": "off",

    "no-restricted-dependencies": "off",
    "no-restricted-pre-release-dependencies": "off",
    "prefer-no-version-zero-dependencies": "off",
    "prefer-absolute-version-dependencies": "off",
    "prefer-caret-version-dependencies": "off",
    "prefer-tilde-version-dependencies": "off",
    "prefer-alphabetical-dependencies": "error",

    "no-restricted-devDependencies": "off",
    "no-restricted-pre-release-devDependencies": "off",
    "prefer-no-version-zero-devDependencies": "off",
    "prefer-absolute-version-devDependencies": "off",
    "prefer-caret-version-devDependencies": "off",
    "prefer-tilde-version-devDependencies": "off",
    "prefer-alphabetical-devDependencies": "error",

    "prefer-alphabetical-bundledDependencies": "error",

    "prefer-alphabetical-optionalDependencies": "error",

    "prefer-alphabetical-peerDependencies": "error",

    // Inherited from `npm-package-json-lint-config-default`
    "description-format": [
      "error",
      {
        requireCapitalFirstLetter: true,
        requireEndingPeriod: true
      }
    ],
    // "name-format": "error",
    // "version-format": "error",

    "prefer-property-order": [
      "error",
      [
        "name",
        "version",
        "description",
        "keywords",
        "homepage",
        "bugs",
        "license",
        "author",
        "contributors",
        "files",
        "main",
        "jsnext:main",
        "bin",
        "man",
        "directories",
        "repository",
        "scripts",
        "config",
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "bundleDependencies",
        "bundledDependencies",
        "optionalDependencies",
        "engines",
        "engineStrict",
        "os",
        "cpu",
        "preferGlobal",
        "private",
        "publishConfig"
      ]
    ],

    "prefer-no-engineStrict": "error"
  }
};

module.exports = defaultConfig;
