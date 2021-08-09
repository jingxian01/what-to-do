import { Button } from "@chakra-ui/react";
import React from "react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import NextLink from "next/link";

const Index = () => {
  return (
    <Container>
      <Header />
      <NextLink href="/random">
        <Button size="lg" colorScheme="teal">
          Random
        </Button>
      </NextLink>
    </Container>
  );
};

export default Index;
