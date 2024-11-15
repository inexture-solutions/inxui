import { FC, Fragment, ReactNode } from "react";
import { ThemeProvider } from "@inexture/base/providers";
// import { ColorSchemeScript } from "@inexture/base/framework";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      {/*<ColorSchemeScript defaultColorScheme="auto" />*/}
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
};

export default AppProvider;
