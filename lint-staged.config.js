"use strict";

module.exports = {
  "*.{js,mjs,jsx}": [
    "prettier --list-different",
    "eslint --report-unused-disable-directives",
    "git add"
  ],
  "*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}": [
    "prettier --list-different",
    "remark -f -q",
    "git add"
  ],
  "package.json": ["pjl-cli -q", "git add"]
};
