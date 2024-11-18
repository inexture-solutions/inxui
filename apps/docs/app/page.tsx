import { Box, Button, Paper } from "@inexture/base";
import { ToggleMode } from "@inexture/base/utils";

const HomePage = () => {
  return (
    <Box p="lg">
      <Button>Hello</Button>
      <Paper withBorder p="xl">
        <h3>Hello from Paper</h3>
        <h3>Hello from Paper</h3>
        <h3>Hello from Paper</h3>

        <Box p="lg">
          <ToggleMode />
        </Box>
      </Paper>
    </Box>
  );
};

export default HomePage;
