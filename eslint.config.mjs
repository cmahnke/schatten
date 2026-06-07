import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "dist/",
      "eslint.config.mjs",
      "vite.config.js",
      "vite.config.ts",
      "postcss.config.js",
      "postcss.config.cjs",
    ],
  },

  ...tseslint.configs.recommended.map((conf) => ({
    ...conf,
    files: ["**/ts/*.ts", "../../assets/**/*.ts"],
  })),

  {
    files: ["**/ts/*.ts", "../../assets/**/*.ts"],
    languageOptions: {
      parserOptions: {
        /*projectService: true,*/
        tsconfigRootDir: import.meta.dirname,
        /*allowDefaultProject: ["../../../assets/ts/*.ts", "assets/ts/*.ts"]*/
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-warning-comments": ["warn", {}],
      "no-console": ["warn", {}],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-unsafe-function-type": ["warn"],
    },
  },

  {
    ...eslint.configs.recommended,
    files: ["*.config.{js,ts,cjs,mjs}"],
  },
  {
    files: ["*.config.{js,ts,cjs,mjs}"],
    rules: {
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "no-console": ["warn", {}],
    },
  },

  {
    ...eslint.configs.recommended,
    files: ["**/*.{js,jsx,mjs,cjs}"],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "no-warning-comments": ["warn", {}],
      "no-irregular-whitespace": ["warn", {}],
      "no-console": ["warn", {}],
    },
  },
];