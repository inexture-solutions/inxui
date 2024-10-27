import {
  ActionIcon,
  Button,
  type MantineThemeComponents,
} from "@inexture/base";

export const themeButton: Partial<MantineThemeComponents> = {
  Button: Button.extend({
    defaultProps: {
      size: "md",
      variant: "filled",
    },
  }),
  ActionIcon: ActionIcon.extend({
    vars: () => {
      return {
        root: {},
      };
    },
  }),
};
