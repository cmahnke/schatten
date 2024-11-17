import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...[pluginJs.configs.recommended, ...tseslint.configs.recommended].map((conf) => ({
    ...conf,
    files: ["src/**/*.ts"]
  })),
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-warning-comments": ["warn", {}],
      "@typescript-eslint/no-unused-vars": ["warn"]
    }
  },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "no-warning-comments": ["warn", {}],
      "no-irregular-whitespace": ["warn", {}],
      "no-console": ["warn", {}],
    },
  },
  {
    ignores: ["dist/", ".eslintrc.mjs", "vite.config.js", "postcss.config.js"],
  },
];
