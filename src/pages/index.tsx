import { Box, Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import NextLink from "next/link";
import { BrowserHead } from "../components/BrowserHead";
import { Accessibility } from "../components/button/Accessibility";
import { Participants } from "../components/button/Participants";
import { Price } from "../components/button/Price";

const Index = () => {
  return (
    <Container>
      <BrowserHead />
      <Header />
      <Box fontStyle="italic" color="gray.500" p={2}>
        <p>got bored? got nothing to do?</p>
        <p> let us decide what to do</p>
      </Box>
      <HStack mt={10} spacing={2}>
        <NextLink href="/random">
          <Button shadow="md" colorScheme="teal">
            Random
          </Button>
        </NextLink>
        <Button shadow="md" colorScheme="teal">
          Type
        </Button>
        <Accessibility />
        <Participants />
        <Price />
        <Spacer />
        <NextLink href="/about">
          <Button shadow="lg" colorScheme="orange">
            About
          </Button>
        </NextLink>
      </HStack>
    </Container>
  );
};

export default Index;
