import { resolve, join } from "node:path";
import sirv from "sirv";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import { DynamicPublicDirectory } from "vite-multiple-assets";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mimeTypes = { ".glb": "model/gltf-binary" };
const externalPublicDir = resolve("../../static");
const vitePort = 5173;

export default defineConfig({
  base: "./",
  appType: "mpa",
  server: {
    port: vitePort,
    strictPort: true,
    fs: {
      allow: [".", resolve(__dirname), resolve(__dirname, "../../assets"), externalPublicDir]
    }
  },
  plugins: [
    {
      name: "vite-plugin-external-sirv",
      configureServer(server) {
        // Mounting at root without a path string argument
        server.middlewares.use(
          sirv(externalPublicDir, {
            dev: true,
            single: false
          })
        );
      }
    },
    stylelint({ build: true, dev: false, lintOnStart: true }),
    DynamicPublicDirectory(
      [
        resolve(__dirname, "./card-grid/public"),
        resolve(__dirname, "./hdr-canvas/public"),
        resolve(__dirname, "./model/public"),
        resolve(__dirname, "./public"),
        externalPublicDir
      ],
      {
        ssr: true,
        mimeTypes,
        followSymlinks: true
      }
    ),
    viteStaticCopy({
      targets: [
        {
          src: `${externalPublicDir}/*`,
          dest: "."
        }
      ]
    })
  ],
  publicDir: false,
  build: {
    assetsInlineLimit: (filePath) => {
      if (filePath.endsWith(".svg")) return 0;
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
      }
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
