import { create } from "zustand";
import { THEME_COLORS, THEME_NAME } from "../components/colors";

type ThemeStore = {
  active: THEME_NAME;
  colors: string[];
  setActive: (active: ThemeStore["active"]) => void;
  setColors: (colors: string[]) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  active: THEME_NAME.PRIMARY,
  colors: THEME_COLORS.primary as any,
  setActive: (active: ThemeStore["active"]) => set({ active }),
  setColors: (colors: ThemeStore["colors"]) => set({ colors }),
}));
