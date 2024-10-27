import { type MantineThemeComponents } from "@inexture/base";
import { themeButton } from "./button/theme-button";
import { themeInput } from "./input/theme-input";
import { themeBadge } from "./badge/theme-badge";
import { themeDrawer } from "./drawer/theme-drawer";
import { themeModal } from "./modal/theme-modal";
import { themeTable } from "./table/theme-table";
import { themeTooltip } from "./tooltip/theme-tooltip";
import { themeOverlay } from "./overlay/theme-overlay";
import { themeSwitch } from "./switch/theme-switch";

export const themeComponents: Partial<MantineThemeComponents> = {
  ...themeButton,
  ...themeInput,
  ...themeBadge,
  ...themeDrawer,
  ...themeModal,
  ...themeTable,
  ...themeTooltip,
  ...themeOverlay,
  ...themeSwitch,
};
