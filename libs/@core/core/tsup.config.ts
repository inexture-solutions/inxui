import { defineConfig, Options } from "tsup";

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
  treeshake: true,
  clean: false,
  skipNodeModulesBundle: true,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
    "@mantine/core",
    "@mantine/hooks",
    "@mantine/modals",
  ],
};

// Single multi-entry build to avoid parallel tsup runs and keep dist layout stable
export default defineConfig({
  ...config,
  entry: {
    index: "src/index.ts",
    "providers/index": "src/providers/index.ts",
    "theme/index": "src/theme/index.ts",
    "utils/index": "src/utils/index.ts",
  },
  outDir: "dist",
  esbuildOptions(options) {
    // Preserve client directive for React entries; applied globally here which is safe
    options.banner = {
      js: '"use client"',
    };
  },
});
