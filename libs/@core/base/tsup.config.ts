import { defineConfig, Options } from "tsup";

const commonConfig: Options = {
  name: "base",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  minify: true,
  minifyWhitespace: true,
  minifySyntax: true,
  clean: true,
  splitting: true,
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
    entry: ["src/index.ts"],
    outDir: "dist",
    ...commonConfig,
  },
  {
    entry: ["src/framework/index.ts"],
    outDir: "dist/framework",
    ...commonConfig,
  },
  {
    entry: ["src/plugins/index.ts"],
    outDir: "dist/plugins",
    ...commonConfig,
  },
  {
    entry: ["src/theme/index.ts"],
    outDir: "dist/theme",
    ...commonConfig,
  },
]);
