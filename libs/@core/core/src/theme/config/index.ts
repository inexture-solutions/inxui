import type {
  MantineProviderProps,
  MantineTheme,
  MantineThemeOverride,
} from "@mantine/core";
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import { THEME_COLORS, THEME_NAME, ThemeNameT } from "../../components/colors";
import { manager } from "./manager.ts";
import { themeComponents } from "../../components";

const themeOverride: MantineThemeOverride = createTheme({
  fontFamily: "var(--base-font)",
  colors: THEME_COLORS,
  primaryColor: THEME_NAME.PRIMARY,
  primaryShade: 7,
  cursorType: "pointer",
  components: themeComponents,
});

const theme: MantineTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const PROVIDER_CONFIG: Partial<MantineProviderProps> = {
  classNamesPrefix: "toolsify",
  deduplicateCssVariables: true,
  withCssVariables: true,
  withGlobalClasses: true,
  withStaticClasses: true,
  defaultColorScheme: "auto",
  theme: theme,
};

export { theme, PROVIDER_CONFIG, manager, type ThemeNameT };
