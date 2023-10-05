import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import eslint from "@rollup/plugin-eslint";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const prod = process.env.NODE_ENV === "production";

const copyTargets = [
  {
    src: [
      "./node_modules/reveal.js/dist/reveal.css",
      "./node_modules/reveal.js/dist/reset.css",
      "./node_modules/reveal.js/dist/theme",
      "./node_modules/reveal.js/plugin/highlight/monokai.css"
    ],
    dest: "./css",
  },
];

const plugins = [
  resolve(),
  commonjs(),
  eslint({
    fix: true,
    exclude: ["./node_modules/**", "./stylesheets/**"],
  }),
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  prod && terser(),
  postcss({
    plugins: [autoprefixer()],
    extract: true,
    sourceMap: prod ? false : "inline",
    minimize: prod,
  }),
  copy({
    targets: copyTargets,
  }),
];

export default [
  {
    input: "js/slides",
    output: {
      file: "out/slides.js",
      format: "esm",
      name: "Reveal.js Starter",
      sourcemap: prod ? false : "inline",
    },
    plugins: plugins,
  },
];
