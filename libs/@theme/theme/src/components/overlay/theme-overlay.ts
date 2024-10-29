import { LoadingOverlay, type MantineThemeComponents } from "@inexture/base";

export const themeOverlay: Partial<MantineThemeComponents> = {
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: {
      overlayProps: {
        blur: 3,
      },
    },
  }),
};
