import React, { FC } from "react";
import { MantineProvider, MantineProviderProps } from "@mantine/core";
import { theme, THEME_CONFIG } from "../config";

interface ThemeProviderProps {
  children: React.ReactNode;
  providerProps?: Partial<MantineProviderProps>;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, providerProps }) => {
  return (
    <div>
      <MantineProvider {...THEME_CONFIG} theme={theme} {...providerProps}>
        {children}
      </MantineProvider>
    </div>
  );
};

ThemeProvider.displayName = "ThemeProvider";
export { ThemeProvider };
