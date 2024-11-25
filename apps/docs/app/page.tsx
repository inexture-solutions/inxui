import { Box, Button, Paper, Text } from "@inexture/base";

const HomePage = () => {
  return (
    <Box p="xl" mt={180}>
      <Paper>
        <Box p="md" ta="center">
          <h1>Playground</h1>
          <Button>Themed Button</Button>
          <Text fw={"bolder"} c={"theme"}>
            hello
          </Text>
          <Paper>
            <h1>Playground</h1>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default HomePage;
