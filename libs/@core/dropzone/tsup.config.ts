import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "dropzone",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@inexture/core", "@mantine/dropzone"],
  ...options,
}));
