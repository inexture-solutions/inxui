import "./style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@inexture/core/providers";
import { manager, PROVIDER_CONFIG } from "@inexture/core/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      {...PROVIDER_CONFIG}
      props={{ colorSchemeManager: manager({ key: "system" }) }}
      themeName="deepBlue"
    >
      <App />
    </ThemeProvider>
  </StrictMode>,
);
