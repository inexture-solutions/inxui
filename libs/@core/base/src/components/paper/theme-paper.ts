import { MantineThemeComponents, Paper } from "@mantine/core";

export const themePaper: Partial<MantineThemeComponents> = {
  Paper: Paper.extend({
    styles: (theme) => {
      const { shadow, borderWidth, radius, active } =
        theme.other.customTheme || {};
      return {
        root: {
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
