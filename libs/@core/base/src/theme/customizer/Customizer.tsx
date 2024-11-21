// import { Fragment } from "react";
// import {
//   ActionIcon,
//   Box,
//   Divider,
//   Drawer,
//   Flex,
//   Stack,
//   Text,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { Icon } from "../../plugins";
// import { ToggleMode } from "../../utils";
// import AvailableColors from "./components/AvailableColors";
// import withThemeProvider from "./CustomizerProvider.tsx";
// const ThemeCustomizerComp: .FC = () => {
//   const [opened, { open, close }] = useDisclosure(false);
//   return (
//     <Fragment>
//       <ActionIcon variant="default" onClick={open} size="xl">
//         <Icon icon="weui:setting-outlined" width={20} />
//       </ActionIcon>
//       <Drawer
//         position="right"
//         opened={opened}
//         onClose={close}
//         title={
//           <Flex align="center" gap="md">
//             <Icon width={30} icon="hugeicons:layout-01" />
//             <span>Theme Customizer</span>
//           </Flex>
//         }
//         styles={{
//           title: {
//             fontSize: "var(--mantine-font-size-xl)",
//             fontWeight: "bold",
//           },
//           header: {
//             boxShadow: "var(--mantine-shadow-sm)",
//           },
//           body: {
//             padding: 0,
//           },
//         }}
//       >
//         <Stack gap={0}>
//           <Flex align="center" justify="space-between" gap="md" p="sm">
//             <Text fw="bold" fz="md">
//               Mode
//             </Text>
//             <ToggleMode />
//           </Flex>
//           <Divider />
//           <Box>
//             <AvailableColors />
//           </Box>
//         </Stack>
//       </Drawer>
//     </Fragment>
//   );
// };
// ThemeCustomizerComp.displayName = "ThemeCustomizer";
// const ThemeCustomizer = withThemeProvider(ThemeCustomizerComp);
// export { ThemeCustomizer };
import React, { Fragment } from "react";
import {
  ActionIcon,
  Box,
  ColorSwatch,
  Divider,
  Drawer,
  Flex,
  Grid,
  Slider,
  Stack,
  Text,
  Select,
  MantineRadius,
  MantineShadow,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react";
import { useThemeStore } from "../../store";
import { ToggleMode } from "../../utils";
import { THEME_COLORS } from "../../components/colors";
import withThemeProvider from "./CustomizerProvider";
import { theme } from "../../theme/index";

const ThemeCustomizerComp: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const {
    active,
    radius,
    shadow,
    borderWidth,
    setActive,
    setRadius,
    setShadow,
    setBorderWidth,
  } = useThemeStore();

  return (
    <Fragment>
      <ActionIcon variant="default" onClick={open} size="xl">
        <Icon icon="weui:setting-outlined" width={20} />
      </ActionIcon>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={
          <Flex align="center" gap="md">
            <Icon width={30} icon="hugeicons:layout-01" />
            <span>Theme Customizer</span>
          </Flex>
        }
        styles={{
          title: {
            fontSize: theme.fontSizes.xl,
            fontWeight: "bold",
          },
          header: {
            boxShadow: theme.shadows.sm,
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Stack gap={0}>
          <Flex align="center" justify="space-between" gap="md" p="sm">
            <Text fw="bold" fz="md">
              Mode
            </Text>
            <ToggleMode />
          </Flex>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Colors
            </Text>
            <Grid gutter="xs">
              {Object.entries(THEME_COLORS).map(([colorName, colorArray]) => (
                <Grid.Col span={2} key={colorName}>
                  <ColorSwatch
                    color={colorArray[7]}
                    onClick={() =>
                      setActive(colorName as keyof typeof THEME_COLORS)
                    }
                    radius="sm"
                    style={{ cursor: "pointer", width: "100%", height: 40 }}
                  >
                    {active === colorName && (
                      <Box c={colorArray[3]}>
                        <Icon width={20} icon="tdesign:check-circle-filled" />
                      </Box>
                    )}
                  </ColorSwatch>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Radius
            </Text>
            <Select
              value={radius as any}
              onChange={(value) => setRadius(value as MantineRadius)}
              data={[
                { value: "xs", label: "Extra Small" },
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
                { value: "lg", label: "Large" },
                { value: "xl", label: "Extra Large" },
              ]}
            />
          </Box>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Shadow
            </Text>
            <Select
              value={shadow}
              onChange={(value) => setShadow(value as MantineShadow)}
              data={[
                { value: "none", label: "None" },
                { value: "xs", label: "Extra Small" },
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
                { value: "lg", label: "Large" },
                { value: "xl", label: "Extra Large" },
              ]}
            />
          </Box>
          <Divider />
          <Box p="sm">
            <Text fw="bold" fz="md" mb="xs">
              Border Width
            </Text>
            <Slider
              value={borderWidth}
              onChange={setBorderWidth}
              min={0}
              max={5}
              step={1}
              label={(value) => `${value}px`}
              marks={[
                { value: 0, label: "0" },
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
            />
          </Box>
          <Box pos={"fixed"} bottom={3} w={"100%"} p={5}>
            <Button fullWidth onClick={() => window.location.reload()}>
              Apply
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </Fragment>
  );
};

ThemeCustomizerComp.displayName = "ThemeCustomizer";
const ThemeCustomizer = withThemeProvider(ThemeCustomizerComp);
export { ThemeCustomizer };
