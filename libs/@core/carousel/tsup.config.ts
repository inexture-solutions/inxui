import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "carousel",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "@mantine/carousel", "@inexture/core"],
  ...options,
}));
