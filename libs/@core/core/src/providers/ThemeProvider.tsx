import { MantineProvider, type MantineProviderProps } from "@mantine/core";
import { ModalsProvider, type ModalsProviderProps } from "@mantine/modals";
import { PROVIDER_CONFIG, ThemeNameT } from "../theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  props?: Partial<MantineProviderProps>;
  modal?: Partial<ModalsProviderProps>;
  themeName?: ThemeNameT;
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
      theme={{
        ...PROVIDER_CONFIG.theme,
        primaryColor: themeName,
      }}
      {...props}
    >
      <ModalsProvider {...modal}>{children}</ModalsProvider>
    </MantineProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export { ThemeProvider };
