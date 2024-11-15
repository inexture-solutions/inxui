import { FC, Fragment, ReactNode } from "react";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
};

export default AppProvider;
