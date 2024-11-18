import Logo from "@/components/logo/Logo";
import { Flex, Group } from "@inexture/base";
import { ThemeCustomizer } from "@inexture/base/theme";
import { ToggleMode } from "@inexture/base/utils";

const Header = () => {
  return (
    <Group w="100%" justify="space-between" gap="md" align="center" px="xs">
      <Logo />
      <Flex align="center" justify="flex-end" gap="sm">
        <ToggleMode />
        <ThemeCustomizer />
      </Flex>
    </Group>
  );
};

export default Header;
