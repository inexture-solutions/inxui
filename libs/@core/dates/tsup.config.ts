import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "dates",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom", "@mantine/dates", "@inexture/core", "dayjs"],
  ...options,
}));
