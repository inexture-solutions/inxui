import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import {
  Drawer,
  Button,
  ColorSwatch,
  Stack,
  Text,
  Group,
  Box,
  SegmentedControl,
  CheckIcon,
  useMantineColorScheme,
  Center,
} from "@mantine/core";
import { THEME_COLORS } from "./colors";
import { useColorScheme } from "@mantine/hooks";
import { useThemeStore } from "../store/store";
import { Icon } from "@iconify/react";

const appModeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export function ThemeCustomizer() {
  const [opened, setOpened] = React.useState(false);
  const { themeName, setThemeName, appMode, setAppMode } = useThemeStore();
  const systemColorScheme = useColorScheme();
  const { setThemeName: setTheme } = useTheme();
  const { setColorScheme } = useMantineColorScheme();

  // Set colorScheme based on appMode and systemColorScheme
  const colorScheme = appMode;
  console.log("appmode", appMode);

  useEffect(() => {
    setTheme(themeName);
  }, [themeName, setTheme]);

  useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme, setColorScheme]);

  const handleThemeChange = (color: string) => {
    setThemeName(color as keyof typeof THEME_COLORS);
  };

  const handleAppModeChange = (value: "light" | "dark") => {
    setAppMode(value);
  };

  return (
    <>
      <Button
        leftSection={<Icon icon="weui:setting-outlined" width={35} />}
        variant="transparent"
        onClick={() => setOpened(true)}
      />
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Theme Customizer"
      >
        <Stack>
          <Box>
            <Text fw={500} size="lg" mb="md">
              App Mode
            </Text>
            <SegmentedControl
              fullWidth
              value={appMode}
              onChange={handleAppModeChange}
              data={appModeOptions.map(({ label, value }) => ({
                label: (
                  <Center p={5}>
                    <Text ta={"center"}>{label}</Text>
                  </Center>
                ),
                value,
              }))}
            />
          </Box>

          <Box>
            <Text fw={500} mb="md">
              Theme Colors
            </Text>
            <Group p="xs">
              {Object.entries(THEME_COLORS).map(([colorName, colorArray]) => (
                <ColorSwatch
                  key={colorName}
                  color={colorArray[6]}
                  onClick={() => handleThemeChange(colorName)}
                  size={30}
                  radius="sm"
                  style={{ cursor: "pointer" }}
                >
                  {colorName === themeName && <CheckIcon size={16} />}
                </ColorSwatch>
              ))}
            </Group>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
