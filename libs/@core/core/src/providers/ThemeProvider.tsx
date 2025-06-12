import { MantineProvider, type MantineProviderProps } from "@mantine/core";
import { PROVIDER_CONFIG } from "../theme";
import { ModalsProvider, ModalsProviderProps } from "@mantine/modals";
import { type ThemeNameT } from "../components/colors";

interface ThemeProviderProps {
  children: React.ReactNode;
  props?: Partial<MantineProviderProps>;
  modal?: Partial<ModalsProviderProps>;
  themeName?: Partial<ThemeNameT>;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  props,
  modal,
  themeName = "primary",
}) => {
  return (
    <MantineProvider
      {...PROVIDER_CONFIG}
      theme={{ ...PROVIDER_CONFIG.theme, primaryColor: themeName }}
      {...props}
    >
      <ModalsProvider {...modal}>{children}</ModalsProvider>
    </MantineProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export { ThemeProvider };
