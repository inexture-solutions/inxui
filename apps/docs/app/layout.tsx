import React from "react";
import { cookies } from "next/headers";
import { ThemeProvider } from "@inexture/base/providers";
import MasterLayout from "@/layouts/MasterLayout";
import "@/assets/css/style.css";

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
        <ThemeProvider>
          <MasterLayout>{children}</MasterLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
