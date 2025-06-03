import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@inexture/base/providers";
import { ThemeCustomizer } from "@inexture/base/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeCustomizer />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
