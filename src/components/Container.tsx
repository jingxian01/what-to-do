import { Box } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      mt={16}
      mx="auto"
      maxW={800}
      w="100%"
      shadow="4px 4px 8px #bababa"
      borderRadius={10}
    >
      <Box p={8} pt={6}>
        {children}
      </Box>
    </Box>
  );
};
