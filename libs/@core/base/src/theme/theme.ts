import { type MantineProviderProps } from "@mantine/core";
import { manager } from "./manager";

const THEME_PREFIX = "inexture" as const;

const THEME_CONFIG: Partial<MantineProviderProps> = {
  classNamesPrefix: THEME_PREFIX,
  colorSchemeManager: manager({ key: "system-theme" }),
  deduplicateCssVariables: true,
  defaultColorScheme: "auto",
  withCssVariables: true,
  withGlobalClasses: true,
  withStaticClasses: true,
};

export { THEME_CONFIG, THEME_PREFIX };
