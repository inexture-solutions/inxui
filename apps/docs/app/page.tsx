import { Box, Button, Paper } from "@inexture/base";

const HomePage = () => {
  return (
    <Box p="xl" mt={180}>
      <Paper withBorder>
        <Box p="md" ta="center">
          <h1>Playground</h1>

          <Button>Themed Button</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default HomePage;
