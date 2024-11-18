import type {
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@mantine/core";
import { isMantineColorScheme } from "@mantine/core";
import Cookies from "js-cookie";

export interface CookieColorManagerOptions {
  key?: string;
  options?: Cookies.CookieAttributes;
}

export const manager = ({
  key = "mode",
  options = { expires: 365, path: "/" },
}: CookieColorManagerOptions = {}): MantineColorSchemeManager => {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof document === "undefined") {
        return defaultValue;
      }

      try {
        const value = Cookies.get(key);
        return (value as MantineColorScheme) || defaultValue;
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        Cookies.set(key, value, options);
      } catch (error) {
        throw new Error("Manager was unable to save color scheme in cookies.");
      }
    },

    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };

      window.addEventListener("storage", handleStorageEvent);
    },

    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },

    clear: () => {
      Cookies.remove(key, options);
    },
  };
};
