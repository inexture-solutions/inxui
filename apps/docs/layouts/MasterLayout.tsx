import { FC, ReactNode } from "react";
import { AppShell, AppShellHeader, AppShellMain } from "@inexture/base";
import Header from "@/components/common/header/Header";

const MasterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShellHeader withBorder styles={{ header: { display: "flex" } }}>
        <Header />
      </AppShellHeader>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};

export default MasterLayout;
