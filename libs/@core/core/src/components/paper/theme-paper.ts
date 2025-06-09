import { MantineThemeComponents, Paper } from "@mantine/core";

export const themePaper: Partial<MantineThemeComponents> = {
  Paper: Paper.extend({
    defaultProps: {
      withBorder: true,
    },
  }),
};
