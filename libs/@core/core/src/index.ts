// Re-export Mantine packages directly to ensure all components are available
// when consuming @inexture/core. Using an intermediate file causes the bundler
// to drop some exports (e.g., Container), so we export Mantine modules here.
export * from "@mantine/core";
export * from "@mantine/hooks";
export * from "./types/lib.type.ts";
