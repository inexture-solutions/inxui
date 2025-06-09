import { FC } from "react";
import {
  ActionIcon,
  ActionIconProps,
  Tooltip,
  TooltipProps,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { IconBaseProps } from "react-icons";
import { MdOutlineWbSunny, MdWbSunny } from "react-icons/md";

const ToggleMode: FC<{
  button?: Partial<ActionIconProps>;
  icon?: Partial<IconBaseProps>;
  tooltip?: Partial<TooltipProps>;
}> = (props) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const syncHtmlClass = (scheme: "light" | "dark") => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.remove("light", "dark");
      html.classList.add(scheme);
    }
  };

  // 🔄 Sync on mount
  useShallowEffect(() => {
    syncHtmlClass(computedColorScheme);
  }, [computedColorScheme]);

  const handleToggle = () => {
    const nextScheme = colorScheme === "dark" ? "light" : "dark";
    syncHtmlClass(nextScheme);
    setColorScheme(nextScheme);
  };

  return (
    <Tooltip
      label={`Switch ${colorScheme === "dark" ? "Light" : "Dark"} Mode`}
      {...props.tooltip}
    >
      <ActionIcon
        onClick={handleToggle}
        size="md"
        variant="default"
        aria-label="Toggle"
        {...props.button}
      >
        {colorScheme === "dark" ? <MdOutlineWbSunny /> : <MdWbSunny />}
      </ActionIcon>
    </Tooltip>
  );
};

export { ToggleMode };
