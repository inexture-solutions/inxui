import "@inexture/core/styles.layer.css";
import Home from "./Home.tsx";
import { ThemeProvider } from "@inexture/core/providers";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
