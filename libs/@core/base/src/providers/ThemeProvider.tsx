import React from "react";
import "@mantine/core/styles.layer.css";
import { MantineProviderProps } from "@mantine/core";
import withThemeProvider from "../theme/customizer/CustomizerProvider.tsx";

interface ThemeProviderProps extends MantineProviderProps {
  children: React.ReactNode;
  theme?: MantineProviderProps["theme"];
}

const ThemeProviderComp: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  return <>{children}</>;
};

ThemeProviderComp.displayName = "ThemeProvider";

const ThemeProvider = withThemeProvider(ThemeProviderComp);
export { ThemeProvider };
