import { type MantineThemeComponents, Tooltip } from "@inexture/base";

export const themeTooltip: Partial<MantineThemeComponents> = {
  Tooltip: Tooltip.extend({
    defaultProps: {
      withArrow: true,
      arrowSize: 8,
      arrowOffset: 10,
      transitionProps: {
        transition: "pop",
      },
    },
  }),
};
