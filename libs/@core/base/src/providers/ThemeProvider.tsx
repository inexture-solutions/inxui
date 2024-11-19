import React from "react";
import "@mantine/core/styles.layer.css";
import { MantineProvider, MantineProviderProps } from "@mantine/core";
import { PROVIDER_CONFIG, theme } from "../theme";

interface ThemeProviderProps extends MantineProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MantineProvider {...PROVIDER_CONFIG} theme={theme}>
      {children}
    </MantineProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export { ThemeProvider };
