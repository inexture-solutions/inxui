import { FC, Fragment, ReactNode } from "react";
import { ThemeProvider } from "@inexture/base/theme";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
};

export default AppProvider;
