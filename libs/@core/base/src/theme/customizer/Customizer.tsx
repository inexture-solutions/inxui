import React, { Fragment } from "react";
import {
  ActionIcon,
  Box,
  Divider,
  Drawer,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "../../plugins";
import { ToggleMode } from "../../utils";
import AvailableColors from "./components/AvailableColors";
import withThemeProvider from "./CustomizerProvider.tsx";

const ThemeCustomizerComp: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Fragment>
      <ActionIcon variant="default" onClick={open} size="xl">
        <Icon icon="weui:setting-outlined" width={20} />
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
            fontSize: "var(--mantine-font-size-xl)",
            fontWeight: "bold",
          },
          header: {
            boxShadow: "var(--mantine-shadow-sm)",
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
          <Box>
            <AvailableColors />
          </Box>
        </Stack>
      </Drawer>
    </Fragment>
  );
};

ThemeCustomizerComp.displayName = "ThemeCustomizer";
const ThemeCustomizer = withThemeProvider(ThemeCustomizerComp);
export { ThemeCustomizer };
