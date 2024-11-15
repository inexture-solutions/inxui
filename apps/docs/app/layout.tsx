import React from "react";
import AppProvider from "@/providers/AppProvider";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>
      <AppProvider>{children}</AppProvider>
    </body>
  </html>
);
export default RootLayout;
