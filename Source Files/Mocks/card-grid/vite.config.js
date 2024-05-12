import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteSingleFile } from "vite-plugin-singlefile"
import stylelint from 'vite-plugin-stylelint';
import { join } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    nodePolyfills(),
    {
      apply: 'build'
    },
    stylelint({'build': true, 'dev': false, 'lintOnStart': true}),
  ],
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1'),
      },
    ],
  }
})
