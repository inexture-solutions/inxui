import { type MantineThemeComponents, Modal } from "@inexture/base";

export const themeModal: Partial<MantineThemeComponents> = {
  Modal: Modal.extend({
    defaultProps: {
      size: "md",
    },
  }),
};
