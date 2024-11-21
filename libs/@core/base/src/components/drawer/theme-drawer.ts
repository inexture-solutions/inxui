import { Drawer, type MantineThemeComponents } from "@mantine/core";

export const themeDrawer: Partial<MantineThemeComponents> = {
  Drawer: Drawer.extend({
    defaultProps: {
      size: "xs",
    },
    styles: (theme) => {
      const { shadow } = theme.other.customTheme || {};
      return {
        root: {
          boxShadow: shadow ? theme.shadows[shadow] : undefined,
          border: "none",
          inner: {
            border: "none",
          },
        },
        overlay: {
          border: "none",
        },
      };
    },
  }),
};
