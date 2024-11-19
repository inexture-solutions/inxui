import { FC, ReactNode } from "react";
import { AppShell, AppShellHeader, AppShellMain } from "@inexture/base";
import { ThemeProvider } from "@inexture/base/providers";
import Header from "@/components/common/header/Header";

const MasterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
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
