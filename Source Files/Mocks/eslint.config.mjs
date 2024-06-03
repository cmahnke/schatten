import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': [
        'warn',
        { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
      ],
      'no-warning-comments': [
        'warn',
        {}
      ],
      'no-irregular-whitespace': [
        'warn',
        {}
      ],
      'no-console': [
        'warn',
        {}
      ],
    }
  },
  {
    ignores: ["dist/", ".eslintrc.mjs", 'vite.config.js', 'postcss.config.js'],
  }
];
