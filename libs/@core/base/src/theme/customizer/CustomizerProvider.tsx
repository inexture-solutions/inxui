import React from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { PROVIDER_CONFIG, theme as defaultTheme } from "../config";
import { useCurrentTheme } from "./useCurrentTheme";

const withThemeProvider = <P extends { theme?: object }>(
  Component: React.ComponentType<P>,
): React.FC<P> => {
  const WithTheme: React.FC<P> = (props) => {
    const { currentTheme } = useCurrentTheme();
    const mergedTheme = {
      ...defaultTheme,
      ...props.theme,
      primaryColor: currentTheme.primaryColor,
      defaultRadius: currentTheme.defaultRadius,
      autoContrast: currentTheme.autoContrast,
    };

    return (
      <MantineProvider {...PROVIDER_CONFIG} theme={mergedTheme}>
        <ModalsProvider>
          <Component {...props} />
        </ModalsProvider>
      </MantineProvider>
    );
  };

  WithTheme.displayName = `WithTheme(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithTheme;
};

export default withThemeProvider;
