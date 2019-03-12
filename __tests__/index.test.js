const { NpmPackageJsonLint } = require("npm-package-json-lint");
const isPlainObj = require("is-plain-obj");
const config = require("./..");

function lint(packageJsonData, packageConfig) {
  return new NpmPackageJsonLint().lint(packageJsonData, packageConfig);
}

describe("npm-package-json-lint-config-itgalaxy", () => {
  it("npm-package-json-lint config should be an object", () => {
    expect(isPlainObj(config)).toBe(true);
  });

  it("rules should be an object", () => {
    expect(isPlainObj(config.rules)).toBe(true);
  });

  it("npm-package-json-lint should run without failing", () => {
    const packageJsonData = {
      author: "Caitlin Snow"
    };
    const results = lint(packageJsonData, config.rules);

    expect(results.issues).toMatchSnapshot();
  });
});
