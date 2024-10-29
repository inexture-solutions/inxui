import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "base",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@mantine/core", "@mantine/hooks"],
  ...options,
}));
