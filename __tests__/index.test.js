const NpmPackageJsonLint = require("npm-package-json-lint");
const test = require("ava");
const isPlainObj = require("is-plain-obj");
const config = require("./..");

function lint(packageJsonData, packageConfig) {
  const options = {
    ignoreWarnings: true
  };
  const npmPackageJsonLint = new NpmPackageJsonLint(
    packageJsonData,
    packageConfig,
    options
  );

  return npmPackageJsonLint.lint();
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
  const results = lint(packageJsonData, config);

  t.true(results.errors.length === 11);
  t.true(typeof results.warnings === "undefined");
});
