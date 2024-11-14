import { create, UseBoundStore, StoreApi } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { THEME_COLORS } from "../theme/colors";

type ThemeStore = {
  themeName: keyof typeof THEME_COLORS;
  appMode: "light" | "dark";
  setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
  setAppMode: (mode: "light" | "dark") => void;
};

// Explicit type annotation for `useThemeStore`
export const useThemeStore: UseBoundStore<StoreApi<ThemeStore>> =
  create<ThemeStore>()(
    persist(
      (set) => ({
        themeName: "primary",
        appMode: "light",
        setThemeName: (themeName) => set({ themeName }),
        setAppMode: (mode) => set({ appMode: mode }),
      }),
      {
        name: "theme-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
