import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "./src/components/index.js",
    output: [
      {
        file: "./dist/index.js",
        format: "cjs",
      },
      {
        file: "./dist/index.es.js",
        format: "esm",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  //   {
  //     input: "src/components/index.js",
  //     output: [{ file: "dist/index.js", format: "esm" }],
  //   },
];
