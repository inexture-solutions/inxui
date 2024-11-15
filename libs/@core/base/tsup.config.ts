import { defineConfig, Options } from "tsup";

const commonConfig: Options = {
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  clean: true,
  minifySyntax: true,
  minifyWhitespace: true,
  sourcemap: true,
  treeshake: false,
  external: [
    "react",
    "@mantine/core",
    "@mantine/hooks",
    "zustand",
    "@iconify/react",
    "crypto-ts",
  ],
};

export default defineConfig([
  {
    ...commonConfig,
    entry: ["src/index.ts"],
    outDir: "dist",
  },
  {
    entry: ["src/framework/index.ts"],
    outDir: "dist/framework",
    ...commonConfig,
  },
  {
    ...commonConfig,
    entry: ["src/plugins/index.ts"],
    outDir: "dist/plugins",
  },
  {
    ...commonConfig,
    entry: ["src/theme/index.ts"],
    outDir: "dist/theme",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
