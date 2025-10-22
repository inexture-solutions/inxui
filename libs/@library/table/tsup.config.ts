import { defineConfig, Options } from "tsup";

const isWatch = process.argv.some((a) => a.includes("--watch"));

const base: Options = {
  name: "table",
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  sourcemap: true,
  minifyIdentifiers: true,
  bundle: true,
  treeshake: false,
  clean: !isWatch,
  external: [
    "@inexture/core",
    "mantine-react-table",
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
  ],
  skipNodeModulesBundle: true,
  cjsInterop: true,
  splitting: true,
  terserOptions: { compress: true, module: true, toplevel: true },
};

export default defineConfig({
  ...base,
  entry: {
    index: "src/index.ts",
    "components/index": "src/components/index.ts",
    "providers/index": "src/providers/index.ts",
  },
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
