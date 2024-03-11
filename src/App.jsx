import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#110c1b" color="blue.200" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App;
