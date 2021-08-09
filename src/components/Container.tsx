import { Box } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      mt={[4, 8, 16]}
      mx="auto"
      maxW={800}
      w={["90%", "90%", "100%"]}
      shadow="4px 4px 8px #bababa"
      borderRadius={10}
    >
      <Box p={[6, 6, 8]} pt={6}>
        {children}
      </Box>
    </Box>
  );
};
