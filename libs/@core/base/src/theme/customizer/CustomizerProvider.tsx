import React from "react";
import { useThemeStore } from "../../store";
import { PROVIDER_CONFIG, theme } from "../config";
import { MantineProvider } from "@mantine/core";

const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> => {
  const WithTheme: React.FC<P> = (props) => {
    const { active } = useThemeStore();
    return (
      <MantineProvider
        {...PROVIDER_CONFIG}
        theme={{ ...theme, primaryColor: active }}
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
