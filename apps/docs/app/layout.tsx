import React from "react";
import AppProvider from "@/providers/AppProvider";
import { cookies } from "next/headers";

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = await cookies();
  const mode = cookieStore.get("mode");

  return (
    <html
      lang="en"
      data-mantine-color-scheme={mode?.value === "dark" ? "dark" : "light"}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};
export default RootLayout;
