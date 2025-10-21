import { defineConfig, Options } from "tsup";
import fs from "node:fs";

const config: Options = {
  name: "icons",
  format: ["cjs", "esm"],
  clean: false,
  dts: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  sourcemap: true,
  minifyIdentifiers: true,
  bundle: true,
  treeshake: false,
  external: ["react", "react-dom", "react-icons"],
  cjsInterop: true,
  splitting: false,
  terserOptions: { compress: true, module: true, toplevel: true },
};

const iconDirs = fs
  .readdirSync("src")
  .filter((dir) => fs.statSync(`src/${dir}`).isDirectory());

// Dynamically generate icon configs
const iconSubPackages = iconDirs.map((dir) => ({
  ...config,
  entry: [`src/${dir}/index.ts`],
  outDir: `dist/${dir}`,
  dts: {
    entry: `src/${dir}/index.ts`,
  },
}));

export default defineConfig([
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
    clean: true,
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
  ...iconSubPackages,
]);
