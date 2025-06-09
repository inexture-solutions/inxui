import { defineConfig, Options } from "tsup";

const config: Options = {
  name: "form",
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
  external: [
    "@inexture/core",
    "@inexture/dates",
    "@inexture/dropzone",
    "react",
    "react-dom",
  ],
  cjsInterop: true,
  splitting: true,
  terserOptions: { compress: true, module: true, toplevel: true },
};

export default defineConfig([
  {
    ...config,
    entry: ["src/index.ts"],
    outDir: "dist",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
  {
    ...config,
    name: "form:components",
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
    name: "form:provider",
    entry: ["src/providers/index.ts"],
    outDir: "dist/providers",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
  {
    ...config,
    name: "form:plugin:zod",
    entry: ["src/plugins/zod/index.ts"],
    outDir: "dist/plugins/zod",
  },
]);
