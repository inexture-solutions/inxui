import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "modals",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@inexture/base", "@mantine/modals"],
  ...options,
}));
