import { defineConfig, Options } from "tsup";
import * as fs from "node:fs";

const config: Options = {
  name: "core",
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  sourcemap: true,
  minifyIdentifiers: true,
  bundle: true,
  treeshake: false,
  external: [
    "react",
    "react-dom",
    "@mantine/core",
    "@mantine/hooks",
    "@mantine/modals",
  ],
};

export default defineConfig([
  // Main index
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
  },

  // Providers
  {
    ...config,
    entry: ["src/providers/index.ts"],
    outDir: "dist/providers",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },

  // Theme
  {
    ...config,
    entry: ["src/theme/index.ts"],
    outDir: "dist/theme",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },

  // Utils
  {
    ...config,
    entry: ["src/utils/index.ts"],
    outDir: "dist/utils",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
