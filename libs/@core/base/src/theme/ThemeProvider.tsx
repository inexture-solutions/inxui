import React, { createContext, useContext } from "react";
import {
  MantineProvider,
  MantineThemeOverride,
  DefaultMantineColor,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { THEME_COLORS } from "./colors";
import { useThemeStore } from "../store/store";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  themeName: DefaultMantineColor;
  setThemeName: (name: DefaultMantineColor) => void;
  appMode: "light" | "dark";
  setAppMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: "primary",
  setThemeName: () => {},
  appMode: "light",
  setAppMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeName, setThemeName, appMode, setAppMode } = useThemeStore();
  const systemColorScheme = useColorScheme();

  const selectedTheme: MantineThemeOverride = {
    colors: {
      [themeName]: THEME_COLORS[themeName] || THEME_COLORS.primary,
    },
    primaryColor: themeName,
  };

  const effectiveColorScheme = appMode;

  return (
    <ThemeContext.Provider
      value={{ themeName, setThemeName, appMode, setAppMode }}
    >
      <MantineProvider
        theme={selectedTheme}
        withCssVariables
        classNamesPrefix="inexture"
        defaultColorScheme={effectiveColorScheme}
        deduplicateCssVariables
        withGlobalClasses
        withStaticClasses
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
