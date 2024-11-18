import { defineConfig, Options } from "tsup";

const config: Options = {
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  clean: false,
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
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
};

export default defineConfig([
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
  },
  {
    ...config,
    entry: ["src/plugins/index.ts"],
    outDir: "dist/plugins",
  },
  {
    ...config,
    entry: ["src/providers/index.ts"],
    outDir: "dist/providers",
  },
  {
    ...config,
    entry: ["src/theme/index.ts"],
    outDir: "dist/theme",
  },
]);
