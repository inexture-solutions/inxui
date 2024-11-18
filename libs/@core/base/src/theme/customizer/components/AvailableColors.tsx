import { Box, ColorSwatch, Grid, Text } from "@mantine/core";
import React from "react";
import { THEME_COLORS } from "../../../components/colors";
import { theme } from "../../index.ts";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useThemeStore } from "../../../store/store.ts";

const AvailableColors: React.FC = () => {
  const { active, setActive, setColors } = useThemeStore();

  const handleChange = (colorName, colorArray) => {
    setActive(colorName);
    setColors(colorArray);
  };

  return (
    <div>
      <Text fw="bold" fz="md">
        Colors
      </Text>
      <Grid gutter="sm" p="xs">
        {Object.entries(THEME_COLORS).map(([colorName, colorArray]) => {
          return (
            <Grid.Col span={2} key={colorName}>
              <ColorSwatch
                key={colorName}
                color={colorArray[theme.primaryShade as number]}
                onClick={() => handleChange(colorName, colorArray)}
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
          );
        })}
      </Grid>
    </div>
  );
};

export default AvailableColors;
