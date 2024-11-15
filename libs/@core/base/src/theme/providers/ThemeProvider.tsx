import React, { FC } from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  MantineProviderProps,
} from "@mantine/core";
import { THEME_CONFIG, theme } from "../config";

interface ThemeProviderProps {
  children: React.ReactNode;
  providerProps: Partial<MantineProviderProps>;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, providerProps }) => {
  return (
    <div>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider {...THEME_CONFIG} theme={theme} {...providerProps}>
        {children}
      </MantineProvider>
    </div>
  );
};

ThemeProvider.displayName = "ThemeProvider";
export { ThemeProvider };
