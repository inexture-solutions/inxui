import React from "react";
import {
  ActionIcon,
  ActionIconProps,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const ToggleMode: React.FC<ActionIconProps> = (props) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="md"
      variant="default"
      aria-label="Toggle Mode"
      {...props}
    >
      <Icon fontSize={18} icon="pepicons-print:sun" />
    </ActionIcon>
  );
};

export { ToggleMode };
