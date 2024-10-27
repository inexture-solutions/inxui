import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "spotlight",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@mantine/spotlight", "@inexture/base"],
  ...options,
}));
