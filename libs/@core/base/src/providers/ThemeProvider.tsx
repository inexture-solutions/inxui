import "@mantine/core/styles.css";

import React, { FC } from "react";
import {
  ColorSchemeScript,
  MantineProvider,
  MantineProviderProps,
} from "@mantine/core";
import { PROVIDER_CONFIG, theme } from "../config";

interface ThemeProviderProps {
  children: React.ReactNode;
  providerProps?: Partial<MantineProviderProps>;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, providerProps }) => {
  return (
    <div>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider theme={theme} {...PROVIDER_CONFIG} {...providerProps}>
        {children}
      </MantineProvider>
    </div>
  );
};

ThemeProvider.displayName = "ThemeProvider";
export { ThemeProvider };
