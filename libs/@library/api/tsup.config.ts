import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "api",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: [
    "react",
    "react-dom",
    "@inexture/base",
    "@inexture/toast",
    "@inexture/auth",
    "@tanstack/react-query",
    "zustand",
  ],
  ...options,
}));
