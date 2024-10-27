import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "tiptap",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: [
    "react",
    "@mantine/tiptap",
    "@inexture/base",
    "@tiptap/extension-underline",
    "@tiptap/react",
    "@tiptap/starter-kit",
    "@tiptap/pm",
  ],
  ...options,
}));
