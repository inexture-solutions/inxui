// import { create, UseBoundStore, StoreApi } from "zustand";
// import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
// import { THEME_COLORS } from "../theme/colors";
// import { AES, enc } from "crypto-ts";

// const ENCRYPTION_KEY = "your-secret-encryption-key";
// // const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'fallback-key';

// type ThemeStore = {
//   themeName: keyof typeof THEME_COLORS;
//   appMode: "light" | "dark";
//   setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
//   setAppMode: (mode: "light" | "dark") => void;
// };

// // Custom storage with encryption
// const encryptedStorage: StateStorage = {
//   getItem: (key: string): string | null => {
//     const encryptedData = localStorage.getItem(key);
//     if (encryptedData) {
//       const decryptedBytes = AES.decrypt(encryptedData, ENCRYPTION_KEY);
//       return decryptedBytes.toString(enc.Utf8);
//     }
//     return null;
//   },
//   setItem: (key: string, value: string): void => {
//     const encryptedData = AES.encrypt(value, ENCRYPTION_KEY).toString();
//     localStorage.setItem(key, encryptedData);
//   },
//   removeItem: (key: string): void => {
//     localStorage.removeItem(key);
//   },
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
//         name: "theme",
//         storage: createJSONStorage(() => encryptedStorage),
//       }
//     )
//   );

// import { create, UseBoundStore, StoreApi } from "zustand";
// import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
// import { THEME_COLORS } from "../theme/colors";

// type ThemeStore = {
//   themeName: keyof typeof THEME_COLORS;
//   appMode: "light" | "dark";
//   setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
//   setAppMode: (mode: "light" | "dark") => void;
// };

// // Custom storage with Base64 encoding
// const encodedStorage: StateStorage = {
//   getItem: (key: string): string | null => {
//     const encodedData = localStorage.getItem(key);
//     if (encodedData) {
//       return atob(encodedData);
//     }
//     return null;
//   },
//   setItem: (key: string, value: string): void => {
//     const encodedData = btoa(value);
//     localStorage.setItem(key, encodedData);
//   },
//   removeItem: (key: string): void => {
//     localStorage.removeItem(key);
//   },
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
//         name: "theme",
//         storage: createJSONStorage(() => encodedStorage),
//       }
//     )
//   );

import { create, StoreApi, UseBoundStore } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { THEME_COLORS } from "../components/colors";

type ThemeStore = {
  themeName: keyof typeof THEME_COLORS;
  colorScheme: "light" | "dark";
  setThemeName: (themeName: keyof typeof THEME_COLORS) => void;
  setColorScheme: (scheme: "light" | "dark") => void;
};

// Custom storage with Base64 encoding
const encodedStorage: StateStorage = {
  getItem: (key: string): string | null => {
    const encodedData = localStorage.getItem(key);
    if (encodedData) {
      return atob(encodedData);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    const encodedData = btoa(value);
    localStorage.setItem(key, encodedData);
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
        colorScheme: "light",
        setThemeName: (themeName) => set({ themeName }),
        setColorScheme: (scheme) => set({ colorScheme: scheme }),
      }),
      {
        name: "theme",
        storage: createJSONStorage(() => encodedStorage),
      },
    ),
  );
