import { defineConfig, Options } from "tsup";

const config: Options = {
  name: "base",
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  sourcemap: true,
  minifyIdentifiers: true,
  bundle: true,
  treeshake: false,
  external: ["crypto-ts", "react", "react-dom", "zustand"],
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
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
  },
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
