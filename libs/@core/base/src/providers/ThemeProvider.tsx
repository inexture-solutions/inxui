import "@mantine/core/styles.layer.css";

import React, { FC, Fragment } from "react";
import { MantineProvider, MantineProviderProps } from "@mantine/core";
import { PROVIDER_CONFIG, theme } from "../theme";

interface ThemeProviderProps extends MantineProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <Fragment>
      <MantineProvider {...PROVIDER_CONFIG} theme={theme}>
        {children}
      </MantineProvider>
    </Fragment>
  );
};

ThemeProvider.displayName = "ThemeProvider";
export { ThemeProvider };
