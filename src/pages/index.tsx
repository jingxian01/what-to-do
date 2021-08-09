import { Box, Button, HStack, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import NextLink from "next/link";
import { BrowserHead } from "../components/BrowserHead";
import { Accessibility } from "../components/button/Accessibility";
import { Participants } from "../components/button/Participants";
import { Price } from "../components/button/Price";
import { Type } from "../components/button/Type";
import { useWindowDimensions } from "../hooks/useWindowDimension";

const Index = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <BrowserHead />
      <Header />
      <Box fontStyle="italic" color="gray.500" p={2}>
        <p>got bored? got nothing to do?</p>
        <p> let us decide what to do</p>
      </Box>
      {width <= 768 ? (
        <VStack mt={10} spacing={2}>
          <NextLink href="/random">
            <Button shadow="md" colorScheme="teal" w="100%">
              Random
            </Button>
          </NextLink>
          <Type isMobile={true} />
          <Accessibility isMobile={true} />
          <Participants isMobile={true} />
          <Price isMobile={true} />
          <Spacer />
          <NextLink href="/about">
            <Button shadow="lg" colorScheme="orange" w="100%">
              About
            </Button>
          </NextLink>
        </VStack>
      ) : (
        <HStack mt={10} spacing={2}>
          <NextLink href="/random">
            <Button shadow="md" colorScheme="teal">
              Random
            </Button>
          </NextLink>
          <Type />
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
      )}
    </Container>
  );
};

export default Index;
