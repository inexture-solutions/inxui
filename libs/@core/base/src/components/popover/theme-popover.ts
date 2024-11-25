import { MantineThemeComponents, Popover } from "@mantine/core";

export const themePopover: Partial<MantineThemeComponents> = {
  Popover: Popover.extend({
    styles: (theme) => {
      const { shadow, borderWidth, radius, active } =
        theme.other.customTheme || {};
      return {
        dropdown: {
          boxShadow: shadow ? theme.shadows[shadow] : undefined,
          border: borderWidth
            ? `${borderWidth}px solid ${theme.colors[active][theme.primaryShade as number]}`
            : undefined,
          borderRadius: radius ? theme.radius[radius] : undefined,
        },
      };
    },
  }),
};
