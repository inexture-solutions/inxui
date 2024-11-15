import "@mantine/core/styles.css";

import React, { FC } from "react";
import { MantineProvider } from "@mantine/core";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
};

ThemeProvider.displayName = "ThemeProvider";
export { ThemeProvider };
