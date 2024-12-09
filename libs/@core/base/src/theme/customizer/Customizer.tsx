import React, { Fragment, useCallback, useMemo } from "react";
import {
  ActionIcon,
  ActionIconProps,
  Box,
  ColorSwatch,
  Divider,
  Drawer,
  Flex,
  Grid,
  MantineRadius,
  Select,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react";
import { ToggleMode } from "../../utils";
import withThemeProvider from "./CustomizerProvider";
import { useThemeStore } from "../../store";
import { useCurrentTheme } from "./useCurrentTheme";

interface ThemeCustomizerProps extends ActionIconProps {
  theme?: object;
}

const ThemeCustomizerComp: React.FC<ThemeCustomizerProps> = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { themeName, setTheme } = useThemeStore();
  const { updateTheme } = useCurrentTheme();

  const updateThemeColor = useCallback(
    (colorName: string) => {
      setTheme((currentTheme) => ({
        ...currentTheme,
        primaryColor: colorName,
      }));
      updateTheme((prevTheme) => ({
        ...prevTheme,
        primaryColor: colorName,
      }));
    },
    [setTheme, updateTheme],
  );

  const updateThemeRadius = useCallback(
    (radius: MantineRadius) => {
      setTheme((currentTheme) => ({
        ...currentTheme,
        defaultRadius: radius,
      }));
      updateTheme((prevTheme) => ({
        ...prevTheme,
        defaultRadius: radius,
      }));
    },
    [setTheme, updateTheme],
  );

  const handleAutoContrastChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.checked;
      setTheme((currentTheme) => ({
        ...currentTheme,
        autoContrast: newValue,
      }));
    },
    [setTheme],
  );

  const radiusOptions = useMemo(
    () =>
      Object.keys(themeName.radius).map((key) => ({
        value: key,
        label: key.toUpperCase(),
      })),
    [themeName.radius],
  );

  const colorSwatches = useMemo(
    () =>
      Object.entries(themeName.colors).map(([colorName, colorArray]) => (
        <Grid.Col span={2} key={colorName}>
          <ColorSwatch
            color={colorArray[7]}
            onClick={() => updateThemeColor(colorName)}
            radius="sm"
            style={{ cursor: "pointer", width: "100%", height: 40 }}
          >
            {themeName.primaryColor === colorName && (
              <Box c={colorArray[3]}>
                <Icon width={20} icon="tdesign:check-circle-filled" />
              </Box>
            )}
          </ColorSwatch>
        </Grid.Col>
      )),
    [themeName.colors, themeName.primaryColor, updateThemeColor],
  );

  return (
    <Fragment>
      <ActionIcon variant="default" onClick={open} size="md" {...props}>
        <Icon icon="weui:setting-outlined" fontSize={18} />
      </ActionIcon>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={
          <Flex align="center" gap="md">
            <Icon width={30} icon="hugeicons:layout-01" />
            <span>Theme Customizer</span>
          </Flex>
        }
        styles={{
          title: {
            fontSize: themeName.fontSizes.xl,
            fontWeight: "bold",
          },
          header: {
            boxShadow: themeName.shadows.sm,
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Stack gap={0}>
          <Flex align="center" justify="space-between" gap="md" p="sm">
            <Text fw="bold" fz="md">
              Mode
            </Text>
            <ToggleMode />
          </Flex>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Colors
            </Text>
            <Grid gutter="xs">{colorSwatches}</Grid>
          </Box>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Radius
            </Text>
            <Select
              withCheckIcon={false}
              value={themeName.defaultRadius as any}
              onChange={(value) => updateThemeRadius(value as MantineRadius)}
              data={radiusOptions}
            />
          </Box>
          <Divider />
          <Flex align="center" justify="space-between" gap="md" p="sm" pt={16}>
            <Text fw="bold" fz="md">
              Auto Contrast
            </Text>
            <Switch
              size="md"
              checked={themeName.autoContrast}
              onChange={handleAutoContrastChange}
            />
          </Flex>
        </Stack>
      </Drawer>
    </Fragment>
  );
};

ThemeCustomizerComp.displayName = "ThemeCustomizer";
const ThemeCustomizer = withThemeProvider(ThemeCustomizerComp);
export { ThemeCustomizer };
