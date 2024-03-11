import React from 'react';
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import CodeIDE from "./components/CodeIDE";

function App() {
  const [bgColor, setBgColor] = React.useState("#110c1b");

  const handleButtonClick = () => {
    setBgColor((prevBgColor) => (prevBgColor === "#110c1b" ? "#ffffff" : "#110c1b"));
  };

  return (
    <Box minH="100vh" bg={bgColor} color="blue.200" px={6} py={7}>
      <Flex justifyContent="flex-end" mt={-3} spaceRight={400}>
        <Button onClick={handleButtonClick}>Change Theme</Button>
      </Flex>
      <CodeIDE />
    </Box>
  );
}

export default App;