import { resolve, join } from "node:path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import { DynamicPublicDirectory } from "vite-multiple-assets";
import { checker } from "vite-plugin-checker";

const mimeTypes = { ".glb": "model/gltf-binary" };

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    {
      apply: "build"
    },
    stylelint({ build: true, dev: false, lintOnStart: true }),
    DynamicPublicDirectory(["./card-grid/public", "./hdr-canvas/public", "./model/public", "./public", "../../static"], {
      ssr: true,
      mimeTypes,
      followSymlinks: true
    }),
    eslint()
    /*checker({ typescript: true })*/
  ],
  publicDir: true,
  build: {
    target: "es2022",
    /*commonjsOptions: { transformMixedEsModules: true },*/
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cardgrid: resolve(__dirname, "card-grid/index.html"),
        pattern: resolve(__dirname, "css-draft/index.html"),
        hdr: resolve(__dirname, "hdr-canvas/index.html"),
        model: resolve(__dirname, "model/index.html")
      },
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules", "$1")
      },
      {
        find: /@\/(.+.ts)/,
        replacement: join(process.cwd(), "common-assets", "ts", "$1")
      },
      {
        find: /@\/(.+.js)/,
        replacement: join(process.cwd(), "common-assets", "js", "$1")
      },
      // Default: No suffix = JavaScript
      {
        find: /@\/(.+)/,
        replacement: join(process.cwd(), "common-assets", "js", "$1")
      }
      /*
      {
        find: "./src/hdr-check",
        replacement: resolve(__dirname, "node_modules", "hdr-canvas", "src", "hdr-check")
      },
      {
        find: "./src/hdr-check(.*)",
        replacement: join(process.cwd(), "node_modules/hdr-canvas/$1")
      }
      */
    ]
  },
  optimizeDeps: {
    exclude: ["@monogrid/gainmap-js/libultrahdr"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
