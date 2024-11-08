import {defineConfig} from "tsup";

export default defineConfig((options) => ({
    name: "toast",
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    external: ["react","react-dom" ,"sonner"],
    ...options,
}));
