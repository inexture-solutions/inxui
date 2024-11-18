import type {
  MantineProviderProps,
  MantineTheme,
  MantineThemeOverride,
} from "@mantine/core";
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import { THEME_COLORS, THEME_PRIMARY } from "../../components/colors";
import { manager } from "./manager";

const PROVIDER_CONFIG: Partial<MantineProviderProps> = {
  classNamesPrefix: "inx",
  colorSchemeManager: manager(),
  deduplicateCssVariables: true,
  withCssVariables: true,
  withGlobalClasses: true,
  withStaticClasses: true,
};

const themeOverride: MantineThemeOverride = createTheme({
  colors: THEME_COLORS,
  primaryColor: THEME_PRIMARY,
  primaryShade: 7,
  cursorType: "pointer",
  // components: themeComponents,
});

const theme: MantineTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export { theme, THEME_COLORS, THEME_PRIMARY, PROVIDER_CONFIG, manager };
