import React from "react";
import { MantineProvider } from "@mantine/core";
import { PROVIDER_CONFIG, theme } from "../config";
import { useCurrentTheme } from "./useCurrentTheme";

const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithTheme: React.FC<P> = (props) => {
    const { currentTheme } = useCurrentTheme();

    return (
      <MantineProvider
        {...PROVIDER_CONFIG}
        theme={{
          ...theme,
          primaryColor: currentTheme.primaryColor,
          defaultRadius: currentTheme.defaultRadius,
          autoContrast: currentTheme.autoContrast,
        }}
      >
        <Component {...props} />
      </MantineProvider>
    );
  };

  WithTheme.displayName = `WithTheme(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithTheme;
};

export default withThemeProvider;
