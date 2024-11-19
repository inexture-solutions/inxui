import React from "react";
import { Box, ColorSwatch, Grid, Text } from "@mantine/core";
import { Icon } from "@iconify/react";
import { THEME_COLORS } from "../../../components/colors";
import { useThemeStore } from "../../../store";

const AvailableColors: React.FC = () => {
  const { active, setActive } = useThemeStore();
  const handleChange = (colorName: string) => {
    setActive(colorName);
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
                color={colorArray[7]}
                onClick={() => handleChange(colorName)}
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
