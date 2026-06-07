import { resolve, join } from "node:path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import { DynamicPublicDirectory } from "vite-multiple-assets";
//import checker from 'vite-plugin-checker'
//import viteHtmlResolveAlias from 'vite-plugin-html-resolve-alias';

const mimeTypes = { ".glb": "model/gltf-binary" };

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    middlewareMode: false,
    strictPort: true,
    fs: {
      allow: [
        resolve(__dirname),
        resolve(__dirname, "../../assets"),
        resolve(__dirname, "../../static")
      ]
    }
  },
  plugins: [
    stylelint({ build: true, dev: false, lintOnStart: true }),
    DynamicPublicDirectory(["./card-grid/public", "./hdr-canvas/public", "./model/public", "./public", "../../static"], {
      ssr: true,
      mimeTypes,
      followSymlinks: true
    }),

    //viteHtmlResolveAlias()
    //checker({ typescript: true })
  ],
  publicDir: true,
  build: {
    assetsInlineLimit: (filePath) => {
      if (filePath.endsWith(".svg")) return true;
      return 4096;
    },
    target: "es2022",
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
    alias: [
      {
        find: "@hugo-assets",
        replacement: resolve(__dirname, "../../assets/ts")
      },
      {
        find: "~",
        replacement: resolve(__dirname, "node_modules")
      },
      {
        find: "/fonts",
        replacement: resolve(__dirname, "../../static/fonts")
      },
      {
        find: /.*images\/((svgs\/)?.+\.svg)$/,
        replacement: resolve(__dirname, "../../static/images/$1")
      },
      {
        find: /.*images\/(.+\.(png|jpg|jpeg|gif|webp))$/,
        replacement: resolve(__dirname, "../../static/images/$1")
      },
      
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
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        loadPaths: [resolve(__dirname, "../../assets/scss")]
      }
    }
  }
});
