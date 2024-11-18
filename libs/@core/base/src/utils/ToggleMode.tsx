import React from "react";
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const ToggleMode: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      aria-label="Toggle Mode"
    >
      <Icon fontSize={20} icon="pepicons-print:sun" />
    </ActionIcon>
  );
};

export { ToggleMode };
