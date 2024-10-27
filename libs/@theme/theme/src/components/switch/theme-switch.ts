import { type MantineThemeComponents, Switch } from "@inexture/base";

export const themeSwitch: Partial<MantineThemeComponents> = {
  Switch: Switch.extend({
    defaultProps: {
      display: "inline-flex",
    },
  }),
};
