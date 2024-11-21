import { MantineRadius, MantineShadow } from "@mantine/core";
import { StoreApi, UseBoundStore, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { THEME_COLORS } from "../components/colors";

type ThemeStore = {
  active: keyof typeof THEME_COLORS;
  radius: MantineRadius;
  shadow: MantineShadow;
  borderWidth: number;
  gradient: { from: string; to: string; deg: number } | null;
  setActive: (color: keyof typeof THEME_COLORS) => void;
  setRadius: (radius: MantineRadius) => void;
  setShadow: (shadow: MantineShadow) => void;
  setBorderWidth: (width: number) => void;
  setGradient: (gradient: any) => void;
};

export const useThemeStore: UseBoundStore<StoreApi<ThemeStore>> =
  create<ThemeStore>()(
    persist(
      (set) => ({
        active: "primary",
        radius: "sm",
        shadow: "none",
        borderWidth: 1,
        gradient: { from: "transparent", to: "transparent", deg: 0 },
        setActive: (active) => set({ active }),
        setRadius: (radius) => set({ radius }),
        setShadow: (shadow) => set({ shadow }),
        setBorderWidth: (borderWidth) => set({ borderWidth }),
        setGradient: (gradient) => set({ gradient }),
      }),
      {
        name: "theme",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
