import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { SiGithub, SiNextDotJs, SiTypescript } from "react-icons/si";
import { BrowserHead } from "../components/BrowserHead";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { useWindowDimensions } from "../hooks/useWindowDimension";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <BrowserHead title="About" />
      <Header />
      <Heading fontSize="2xl">About</Heading>
      <Box mb={4}>
        <Box mt={4} mb={2} fontWeight="bold">
          Technologies:
        </Box>
        {width <= 768 ? (
          <Stack>
            <Tag size="lg" color="white" bg="linkedin.900" shadow="md" w="50%">
              <SiTypescript />
              <TagLabel ml={2}>TypeScript</TagLabel>
            </Tag>
            <Tag size="lg" color="white" bg="cyan.400" shadow="md" w="50%">
              <RiReactjsLine />
              <TagLabel ml={2}>React</TagLabel>
            </Tag>
            <Tag size="lg" color="white" bg="black" shadow="md" w="50%">
              <SiNextDotJs />
              <TagLabel ml={2}>Next.js</TagLabel>
            </Tag>
            <Tag size="lg" bg="aquamarine" shadow="md" w="50%">
              <TagLabel>Chakra UI</TagLabel>
            </Tag>
          </Stack>
        ) : (
          <HStack>
            <Tag size="lg" color="white" bg="linkedin.900" shadow="md">
              <SiTypescript />
              <TagLabel ml={2}>TypeScript</TagLabel>
            </Tag>
            <Tag size="lg" color="white" bg="cyan.400" shadow="md">
              <RiReactjsLine />
              <TagLabel ml={2}>React</TagLabel>
            </Tag>
            <Tag size="lg" color="white" bg="black" shadow="md">
              <SiNextDotJs />
              <TagLabel ml={2}>Next.js</TagLabel>
            </Tag>
            <Tag size="lg" bg="aquamarine" shadow="md">
              <TagLabel>Chakra UI</TagLabel>
            </Tag>
          </HStack>
        )}
      </Box>
      <Box mb={4}>
        <Box mt={4} fontWeight="bold">
          Third party API:
        </Box>
        <HStack ml={2}>
          <Box fontWeight="600">Bored API</Box>
          <Link href="https://www.boredapi.com/">
            https://www.boredapi.com/
          </Link>
        </HStack>
      </Box>
      <HStack mt={20} spacing={2}>
        <NextLink href="/">
          <Button shadow="md" colorScheme="gray" leftIcon={<BsChevronLeft />}>
            Back
          </Button>
        </NextLink>
        <NextLink href="https://github.com/jingxian01/what-to-do">
          <Button shadow="md" colorScheme="blackAlpha" leftIcon={<SiGithub />}>
            GitHub
          </Button>
        </NextLink>
      </HStack>
    </Container>
  );
};

export default about;
