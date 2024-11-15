// import { create, UseBoundStore, StoreApi } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { THEME_COLORS } from "../theme/colors";

// type ThemeStore = {
//   themeName: keyof typeof THEME_COLORS;
//   appMode: "light" | "dark";
//   setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
//   setAppMode: (mode: "light" | "dark") => void;
// };

// // Explicit type annotation for `useThemeStore`
// export const useThemeStore: UseBoundStore<StoreApi<ThemeStore>> =
//   create<ThemeStore>()(
//     persist(
//       (set) => ({
//         themeName: "primary",
//         appMode: "light",
//         setThemeName: (themeName) => set({ themeName }),
//         setAppMode: (mode) => set({ appMode: mode }),
//       }),
//       {
//         name: "theme-storage",
//         storage: createJSONStorage(() => localStorage),
//       }
//     )
//   );

import { create, UseBoundStore, StoreApi } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { THEME_COLORS } from "../theme/colors";
import { AES, enc } from "crypto-ts";

// Secret key for encryption (in a real app, this should be stored securely, e.g., in environment variables)
const ENCRYPTION_KEY = "your-secret-encryption-key";

type ThemeStore = {
  themeName: keyof typeof THEME_COLORS;
  appMode: "light" | "dark";
  setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
  setAppMode: (mode: "light" | "dark") => void;
};

// Custom storage with encryption
const encryptedStorage: StateStorage = {
  getItem: (key: string): string | null => {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      const decryptedBytes = AES.decrypt(encryptedData, ENCRYPTION_KEY);
      return decryptedBytes.toString(enc.Utf8);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    const encryptedData = AES.encrypt(value, ENCRYPTION_KEY).toString();
    localStorage.setItem(key, encryptedData);
  },
  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
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
        name: "theme",
        storage: createJSONStorage(() => encryptedStorage),
      }
    )
  );
