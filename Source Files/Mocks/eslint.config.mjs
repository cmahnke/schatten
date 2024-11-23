import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...[eslint.configs.recommended, ...tseslint.configs.recommended].map((conf) => ({
    ...conf,
    files: ["**/*.ts"]
  })),
  {
    files: ["**/*.ts"],
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
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-unsafe-function-type": ["warn"]
    }
  },
  {
    files: ["*.config.js"],
    ...eslint.configs.recommended,
    rules: {
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-console": ["warn", {}]
    }
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-warning-comments": ["warn", {}],
      "no-irregular-whitespace": ["warn", {}],
      "no-console": ["warn", {}]
    }
  },
  {
    ignores: ["dist/", ".eslintrc.mjs", "vite.config.js", "postcss.config.js"]
  }
];
