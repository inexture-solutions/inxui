import { defineConfig, Options } from "tsup";

const config: Options = {
  name: "tiptap",
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
    "@mantine/tiptap",
    "@inexture/core",
    "@tiptap/extension-underline",
    "@tiptap/react",
    "@tiptap/starter-kit",
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
    entry: ["src/extensions/index.ts"],
    outDir: "dist/extensions",
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
