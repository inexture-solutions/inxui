import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "charts",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@mantine/charts", "@inexture/base"],
  ...options,
}));
