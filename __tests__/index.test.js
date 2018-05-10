const { NpmPackageJsonLint } = require("npm-package-json-lint");
const test = require("ava");
const isPlainObj = require("is-plain-obj");
const config = require("./..");

function lint(packageJsonData, packageConfig) {
  return new NpmPackageJsonLint().lint(packageJsonData, packageConfig);
}

test("npm-package-json-lint config should be an object", t => {
  t.true(isPlainObj(config) === true);
});

test("rules should be an object", t => {
  t.true(isPlainObj(config.rules) === true);
});

test("npm-package-json-lint should run without failing", t => {
  const packageJsonData = {
    author: "Caitlin Snow"
  };
  const results = lint(packageJsonData, config.rules);

  t.true(results.issues.length === 9);
});
