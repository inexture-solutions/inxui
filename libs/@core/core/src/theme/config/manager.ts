import type { MantineColorSchemeManager } from "@mantine/core";
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

  return <MantineColorSchemeManager>{
    get: (defaultValue) => {
      if (typeof document === "undefined") {
        return defaultValue;
      }

      try {
        // Read the theme value from the cookie
        const theme = Cookies.get(key);

        return theme || defaultValue;
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
      try {
        Cookies.remove(key, options);
      } catch (error) {
        throw new Error("Unable to clear the color scheme cookie.", error);
      }
    },
  };
};
