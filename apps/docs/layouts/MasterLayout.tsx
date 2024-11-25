"use client";
import { FC, ReactNode } from "react";
import { AppShell, AppShellHeader, AppShellMain } from "@inexture/base";
import { ThemeProvider } from "@inexture/base/providers";
import Header from "@/components/common/header/Header";
import { useCurrentTheme } from "@inexture/base/theme";

const MasterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { currentTheme } = useCurrentTheme();
  return (
    <ThemeProvider theme={currentTheme}>
      <AppShell header={{ height: 60 }} padding={0}>
        <AppShellHeader withBorder styles={{ header: { display: "flex" } }}>
          <Header />
        </AppShellHeader>

        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </ThemeProvider>
  );
};

export default MasterLayout;
