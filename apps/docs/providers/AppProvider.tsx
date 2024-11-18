"use client";

import { FC, Fragment, ReactNode } from "react";
import { ThemeProvider } from "@inexture/base/providers";
import { manager } from "@inexture/base/theme";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider colorSchemeManager={manager({ key: "apple" })}>
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default AppProvider;
