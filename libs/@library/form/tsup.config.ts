import { defineConfig, Options } from "tsup";

const baseConfig: Options = {
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

// Single multi-entry build to avoid parallel tsup runs crashing on Windows
export default defineConfig({
  ...baseConfig,
  entry: {
    index: "src/index.ts",
    "components/index": "src/components/index.ts",
    "providers/index": "src/providers/index.ts",
    "plugins/zod/index": "src/plugins/zod/index.ts",
  },
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
