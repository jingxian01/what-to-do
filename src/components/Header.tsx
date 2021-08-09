import { Heading } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <Heading fontSize="4xl" mb={4}>
        What to do?
      </Heading>
    </>
  );
};
