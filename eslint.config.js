// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("./.prettierrc.json");


module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      ...angular.configs.tsRecommended,
      prettierRecommended
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      prettier,
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      'prettier/prettier': ['warn', prettierConfig],
      '@angular-eslint/prefer-standalone': 'off'
    },
    
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);


