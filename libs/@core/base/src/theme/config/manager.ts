import type {
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@mantine/core";
import { isMantineColorScheme } from "@mantine/core";

export interface LSColorManagerOptions {
  key?: string;
}

export const manager = ({
  key = "mode",
}: LSColorManagerOptions = {}): MantineColorSchemeManager => {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      try {
        return (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Not needed
          (window.localStorage.getItem(key) as MantineColorScheme) ||
          defaultValue
        );
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        throw new Error("Manager was unable to save color scheme.");
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
      window.localStorage.removeItem(key);
    },
  };
};
