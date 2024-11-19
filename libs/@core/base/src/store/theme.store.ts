import { create } from "zustand";

type ThemeStore = {
  active: string;
  setActive: (active: string) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  active: "primary",
  setActive: (active) => set({ active }),
}));
