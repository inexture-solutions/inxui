import { MantineTheme, mergeMantineTheme } from "@mantine/core";
import { StoreApi, UseBoundStore, create } from "zustand";
import { persist } from "zustand/middleware";
import { theme } from "../theme/index";

type ThemeStore = {
  themeName: MantineTheme;
  setTheme: (updater: (theme: MantineTheme) => MantineTheme) => void;
};

export const useThemeStore: UseBoundStore<StoreApi<ThemeStore>> =
  create<ThemeStore>()(
    persist(
      (set) => ({
        themeName: theme,
        setTheme: (updater) =>
          set((state) => ({ themeName: updater(state.themeName) })),
      }),
      {
        name: "theme",
        storage: {
          getItem: (name) => {
            const str = localStorage.getItem(name);
            if (!str) return null;
            const { state } = JSON.parse(str);
            return {
              state: {
                themeName: mergeMantineTheme(theme, state.themeName),
              },
            };
          },
          setItem: (name, value) =>
            localStorage.setItem(name, JSON.stringify(value)),
          removeItem: (name) => localStorage.removeItem(name),
        },
      }
    )
  );
