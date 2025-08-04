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

const iconDirs = fs
  .readdirSync("src/icons")
  .filter((dir) => fs.statSync(`src/icons/${dir}`).isDirectory());

// Dynamically generate icon configs
const iconSubPackages = iconDirs.map((dir) => ({
  ...config,
  entry: [`src/icons/${dir}/index.ts`],
  outDir: `dist/icons/${dir}`,
}));

export default defineConfig([
  // Main index
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
  },

  // Icons root index
  {
    ...config,
    entry: ["src/icons/index.ts"],
    outDir: "dist/icons",
  },

  // Dynamic icon entries
  ...iconSubPackages,

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
