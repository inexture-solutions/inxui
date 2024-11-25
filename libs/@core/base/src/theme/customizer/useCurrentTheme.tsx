import { useEffect, useState } from "react";
import { MantineTheme } from "@mantine/core";
import { useThemeStore } from "../../store";

export const useCurrentTheme = () => {
  const themeName = useThemeStore((state) => state.themeName);
  const setTheme = useThemeStore((state) => state.setTheme);

  const [currentTheme, setCurrentTheme] = useState<MantineTheme>(themeName);

  useEffect(() => {
    setCurrentTheme(themeName);
  }, [themeName]);

  return {
    currentTheme,
    updateTheme: setTheme,
  };
};
