/* eslint-disable no-console */
const extractFastDesignToken = require("./scripts/extract-fast-design-token");
const extractThemeColors = require("./scripts/extract-theme-colors");
const extractThemeGlobal = require("./scripts/extract-theme-global");

console.log("Build started...");
console.log("\n==============================================");

extractFastDesignToken();
extractThemeColors();
extractThemeGlobal();

console.log("\n==============================================");
console.log("\nBuild completed!");
