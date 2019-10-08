"use strict";

const defaultConfig = {
  rules: {
    // Require node rules
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
    "require-main": "error",
    "require-man": "off",
    "require-module": "off",
    "require-name": "error",
    "require-optionalDependencies": "off",
    "require-os": "off",
    "require-peerDependencies": "off",
    "require-preferGlobal": "off",
    "require-private": "off",
    "require-publishConfig": "off",
    "require-repository-directory": "off",
    "require-repository": "error",
    "require-scripts": "off",
    "require-types": "off",
    "require-typings": "off",
    "require-version": "error",

    // Type rules
    "bin-type": "error",
    "bundledDependencies-type": "error",
    "config-type": "error",
    "cpu-type": "error",
    "dependencies-type": "error",
    "description-type": "error",
    "devDependencies-type": "error",
    "directories-type": "error",
    "engines-type": "error",
    "files-type": "error",
    "homepage-type": "error",
    "keywords-type": "error",
    "license-type": "error",
    "main-type": "error",
    "man-type": "error",
    "name-type": "error",
    "optionalDependencies-type": "error",
    "os-type": "error",
    "peerDependencies-type": "error",
    "preferGlobal-type": "error",
    "private-type": "error",
    "repository-type": "error",
    "scripts-type": "error",
    "version-type": "error",

    // Valid value rules
    "valid-values-author": "off",
    "valid-values-engines": "off",
    "valid-values-license": "off",
    "valid-values-name-scope": "off",
    "valid-values-private": "off",
    "valid-values-publishConfig": "off",

    // Dependency rules
    "no-absolute-version-dependencies": "off",
    "no-caret-version-dependencies": "off",
    "no-restricted-dependencies": "off",
    "no-restricted-pre-release-dependencies": "off",
    "no-tilde-version-dependencies": "off",
    "prefer-absolute-version-dependencies": "off",
    "prefer-alphabetical-dependencies": "error",
    "prefer-caret-version-dependencies": "off",
    "prefer-no-version-zero-dependencies": "off",
    "prefer-tilde-version-dependencies": "off",

    "no-absolute-version-devDependencies": "off",
    "no-caret-version-devDependencies": "off",
    "no-restricted-devDependencies": "off",
    "no-restricted-pre-release-devDependencies": "off",
    "no-tilde-version-devDependencies": "off",
    "prefer-absolute-version-devDependencies": "off",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-caret-version-devDependencies": "off",
    "prefer-no-version-zero-devDependencies": "off",
    "prefer-tilde-version-devDependencies": "off",

    "prefer-alphabetical-bundledDependencies": "error",

    "prefer-alphabetical-optionalDependencies": "error",

    "prefer-alphabetical-peerDependencies": "error",

    // Format rules
    "description-format": [
      "error",
      {
        requireCapitalFirstLetter: true,
        requireEndingPeriod: true
      }
    ],
    "name-format": "error",
    "version-format": "error",

    // Package.json property rules
    "prefer-property-order": [
      "error",
      [
        "name",
        "version",
        "private",
        "description",
        "keywords",
        "homepage",
        "bugs",
        "license",
        "author",
        "contributors",
        "files",
        "main",
        "browser",
        "module",
        "jsnext:main",
        "bin",
        "style",
        "types",
        "typings",
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
        "publishConfig"
      ]
    ],

    // Disallowed node rules
    "prefer-no-engineStrict": "error",
    "prefer-no-devDependencies": "off"
  }
};

module.exports = defaultConfig;
