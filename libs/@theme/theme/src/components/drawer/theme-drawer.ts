import { Drawer, type MantineThemeComponents } from "@inexture/base";

export const themeDrawer: Partial<MantineThemeComponents> = {
  Drawer: Drawer.extend({
    defaultProps: {
      size: "xs",
    },
  }),
};
