import { Heading, Box } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Heading fontSize="4xl" mb={2}>
        What to do?
      </Heading>
      <Box fontStyle="italic" color="gray.500" p={2}>
        <p>got bored? got nothing to do?</p>
        <p>click the button below, let us decide what to do</p>
      </Box>
    </>
  );
};
