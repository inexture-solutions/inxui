import React, { FC, ReactNode } from "react";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Flex,
  Group,
} from "@inexture/base";
import Logo from "@/components/logo/Logo";
import { ToggleMode } from "@inexture/base/utils";

const MasterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShellHeader withBorder styles={{ header: { display: "flex" } }}>
        <Group w="100%" justify="space-between" gap="md" align="center" px="xs">
          <Logo />
          <Flex align="center" justify="flex-end" gap="sm">
            <ToggleMode />
          </Flex>
        </Group>
      </AppShellHeader>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};

export default MasterLayout;
