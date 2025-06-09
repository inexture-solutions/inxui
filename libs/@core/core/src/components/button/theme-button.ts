import { ActionIcon, Button, type MantineThemeComponents } from "@mantine/core";

export const themeButton: Partial<MantineThemeComponents> = {
  Button: Button.extend({
    defaultProps: {
      size: "md",
      variant: "filled",
    },
    styles: (theme) => {
      const { shadow, borderWidth, radius, active } = theme.other.custom || {};
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
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: "default",
      size: "compact-xs",
    },
  }),
};
