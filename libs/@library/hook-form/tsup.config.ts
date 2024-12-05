import { defineConfig, Options } from "tsup";

const config: Options = {
  name: "hookForm",
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
    "@inexture/base",
    "@inexture/dates",
    "@inexture/dropzone",
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
    "react",
    "react-dom",
  ],
};

export default defineConfig([
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
  },
  {
    ...config,
    name: "zod",
    entry: ["src/plugins/zod/index.ts"],
    outDir: "dist/plugins/zod",
  },
  {
    ...config,
    name: "formComponents",
    entry: ["src/components/index.ts"],
    outDir: "dist/components",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
  {
    ...config,
    name: "formProviders",
    entry: ["src/providers/index.ts"],
    outDir: "dist/providers",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
