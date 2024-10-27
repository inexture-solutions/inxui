import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "highlight",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@mantine/highlight", "@inexture/base"],
  ...options,
}));
