import type { Metadata } from "next";
import React, { FC, ReactNode } from "react";
import { baseFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "INXUI - A Fully Customized UI Library",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${baseFont.variable}`}>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
