/* eslint-disable no-console */
const StyleDictionaryPackage = require("style-dictionary");
const global = require("../figma/output/global.json");

function _addUnitForSizes(token, unit = "px") {
  const typesWithUnit = [
    "letterSpacing",
    "lineHeights",
    "borderRadius",
    "spacing",
    "paragraphSpacing",
    "fontSizes",
  ];
  if (!typesWithUnit.includes(token.type)) return token.value;
  if (isNaN(Number(token.value))) return token.value;
  return token.value + unit;
}

module.exports = function () {
  /**
   * Custom format that generate javascript dictionnaries containing all global styles values per category
   */
  StyleDictionaryPackage.registerFormat({
    name: "fast/design-tokens-theme-global",
    formatter({ dictionary, options }) {
      const categoryName = options.categoryName ?? "unknown";
      const categoryTypeName = options.categoryTypeName ?? "unknown";
      return (
        "/* DO NOT EDIT THIS FILE ! */\n" +
        "/* This file has been generated by the pipeline*/\n" +
        `import { ${categoryTypeName} } from "../types/${categoryName}.type";\n\n` +
        `export const ${categoryName}: ${categoryTypeName} = ` +
        `{\n${dictionary.allProperties
          .map((token) => `\t${token.name}: "${_addUnitForSizes(token)}"`)
          .join(",\n")}\n}`
      );
    },
  });

  /**
   * Custom format that generate javascript dictionnaries containing all global styles types per category
   */
  StyleDictionaryPackage.registerFormat({
    name: "fast/design-tokens-theme-global-types",
    formatter({ dictionary, options }) {
      const categoryTypeName = options.categoryTypeName ?? "unknown";
      return (
        "/* DO NOT EDIT THIS FILE ! */\n" +
        "/* This file has been generated by the pipeline */\n" +
        `export type ${categoryTypeName} = ` +
        `{\n${dictionary.allProperties
          .map((token) => `\t${token.name}: string`)
          .join(";\n")}\n}`
      );
    },
  });

  console.log("\n==============================================");
  console.log(`\nProcessing:  [Web] [global]`);

  function getConfigFilesByCategory(category) {
    return category.reduce(
      (configs, { categoryName, categoryTypeName, tokenTypes }) => {
        return [
          ...configs,
          {
            destination: `global/${categoryName}.ts`,
            format: "fast/design-tokens-theme-global",
            filter: (token) => tokenTypes.includes(token.type),
            options: { categoryTypeName, categoryName },
          },
          {
            destination: `types/${categoryName}.type.ts`,
            format: "fast/design-tokens-theme-global-types",
            filter: (token) => tokenTypes.includes(token.type),
            options: { categoryTypeName },
          },
        ];
      },
      []
    );
  }

  const tokenCategoryList = [
    {
      categoryName: "colors",
      categoryTypeName: "GlobalColors",
      tokenTypes: ["color"],
    },
    {
      categoryName: "typography",
      categoryTypeName: "Typography",
      tokenTypes: [
        "paragraphSpacing",
        "letterSpacing",
        "fontFamilies",
        "fontWeights",
        "lineHeights",
        "fontSizes",
      ],
    },
    {
      categoryName: "borders",
      categoryTypeName: "Borders",
      tokenTypes: ["borderWidth", "borderRadius"],
    },
    {
      categoryName: "spacings",
      categoryTypeName: "Spacings",
      tokenTypes: ["dimension", "spacing"],
    },
  ];

  const StyleDictionary = StyleDictionaryPackage.extend({
    tokens: global,
    platforms: {
      web: {
        transformGroup: "web",
        prefix: "fpsfa",
        buildPath: "./src/",
        files: [...getConfigFilesByCategory(tokenCategoryList)],
        transforms: ["name/cti/camel"],
      },
    },
  });
  StyleDictionary.buildPlatform("web");

  console.log("\nEnd processing");
};
