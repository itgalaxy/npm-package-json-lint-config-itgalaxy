const path = require("path");
const { NpmPackageJsonLint } = require("npm-package-json-lint");
const isPlainObj = require("is-plain-obj");
const config = require("..");

describe("npm-package-json-lint-config-itgalaxy", () => {
  it("npm-package-json-lint config should be an object", () => {
    expect(isPlainObj(config)).toBe(true);
  });

  it("rules should be an object", () => {
    expect(isPlainObj(config.rules)).toBe(true);
  });

  it("npm-package-json-lint should run without failing", () => {
    const npmPackageJsonLint = new NpmPackageJsonLint({
      configFile: path.resolve(__dirname, "../index.js"),
      cwd: path.resolve(__dirname),
      patterns: ["fixtures"]
    });
    const results = npmPackageJsonLint.lint();

    expect(results).toMatchSnapshot();
  });
});
