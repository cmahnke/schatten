import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteSingleFile } from "vite-plugin-singlefile"
import stylelint from 'vite-plugin-stylelint';
import { join } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import DynamicPublicDirectory from "vite-multiple-assets";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    nodePolyfills(),
    {
      apply: 'build'
    },
    stylelint({'build': true, 'dev': false, 'lintOnStart': true}),
    DynamicPublicDirectory(["card-grid/public"], {
        ssr: false
    })
  ],
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'card-grid/index.html'),
        pattern: resolve(__dirname, 'css-draft/index.html'),
        hdr: resolve(__dirname, 'hdr-canvas/index.html'),
      },
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
  },
  optimizeDeps: {
    exclude: ['@monogrid/gainmap-js/libultrahdr']
  }
})
