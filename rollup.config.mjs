import browserSync from "@rbnlffl/rollup-plugin-browser-sync";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import autoprefixer from "autoprefixer";
import process from "process";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  input: "js/slides",
  output: {
    file: "dist/slides.js",
    format: "esm",
    sourcemap: !isProd,
  },
  plugins: [
    nodeResolve(),
    getBabelOutputPlugin({
      presets: [["@babel/preset-env", { modules: "umd" }]],
      targets: "> 0.25%, not dead",
    }),
    copy({
      targets: [
        {
          src: ["./node_modules/reveal.js/dist/theme/fonts"],
          dest: "./dist",
        },
      ],
    }),
    isProd && terser(),
    postcss({
      plugins: [autoprefixer()],
      extract: true,
      sourceMap: !isProd,
      minimize: isProd,
    }),
    browserSync({
      files: ["dist/**", "index.html", "slides/**"],
      server: true,
      reloadOnRestart: true,
      reloadDebounce: 500,
      minify: isProd,
      notify: false,
    }),
  ],
});
