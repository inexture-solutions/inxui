import { type MantineThemeComponents } from "@mantine/core";
import { themeButton } from "./button/theme-button.ts";
import { themeInput } from "./input/theme-input.ts";
import { themeBadge } from "./badge/theme-badge.ts";
import { themeDrawer } from "./drawer/theme-drawer.ts";
import { themeModal } from "./modal/theme-modal.ts";
import { themeTable } from "./table/theme-table.ts";
import { themeTooltip } from "./tooltip/theme-tooltip.ts";
import { themeOverlay } from "./overlay/theme-overlay.ts";
import { themeSwitch } from "./switch/theme-switch.ts";
import { themePaper } from "./paper/theme-paper.ts";
import { themeCard } from "./card/theme-card.ts";
import { themePopover } from "./popover/theme-popover.ts";

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
  ...themePaper,
  ...themeCard,
  ...themePopover,
};
