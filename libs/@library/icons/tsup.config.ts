import { defineConfig, Options } from "tsup";
import fs from "node:fs";

// Discover all icon subdirectories
const iconDirs = fs
  .readdirSync("src")
  .filter((dir) => fs.statSync(`src/${dir}`).isDirectory());

// Build a single multi-entry config to avoid parallel builds crashing on Windows
const baseConfig: Options = {
  name: "icons",
  format: ["cjs", "esm"],
  clean: true,
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

// Map entries: index plus one for each subdir => dist/<dir>/index.{js,mjs,d.ts}
const entry: Record<string, string> = {
  index: "src/index.ts",
};
for (const dir of iconDirs) {
  entry[`${dir}/index`] = `src/${dir}/index.ts`;
}

export default defineConfig({
  ...baseConfig,
  entry,
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
