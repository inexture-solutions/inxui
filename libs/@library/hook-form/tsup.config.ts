import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "hookForm",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: [
    "react",
    "@inexture/base",
    "@inexture/dates",
    "@inexture/dropzone",
    "@tabler/icons-react",
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
  ],
  ...options,
}));
