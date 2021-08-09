import { Badge, Box, Button, HStack, Spacer } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { DataType } from "../utils/DataType";
import { BsChevronLeft } from "react-icons/bs";
import NextLink from "next/link";
import { typesColor } from "../utils/typesColor";

const random = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <Container>
      <Header />
      <Box
        p={2}
        mb={4}
        shadow="2px 2px 6px #bababa"
        borderRadius={8}
        _hover={{ bg: "gray.100" }}
      >
        <Box ml={4}>Activity: {data.activity}</Box>
      </Box>
      <Box
        p={2}
        mb={4}
        shadow="2px 2px 6px #bababa"
        borderRadius={8}
        _hover={{ bg: "gray.100" }}
      >
        <HStack>
          <Box ml={4}>Type: </Box>
          <Badge fontSize="sm" colorScheme={typesColor[data.type]}>
            {data.type}
          </Badge>
        </HStack>
      </Box>
      {data.link ? (
        <Box
          p={2}
          mb={4}
          shadow="2px 2px 6px #bababa"
          borderRadius={8}
          _hover={{ bg: "gray.100" }}
        >
          <HStack>
            <Box ml={4}>Link: </Box>
            <NextLink href={data.link}>{data.link}</NextLink>
          </HStack>
        </Box>
      ) : null}
      <Box
        p={2}
        mb={4}
        shadow="2px 2px 6px #bababa"
        borderRadius={8}
        _hover={{ bg: "gray.100" }}
      >
        <Box ml={4}>Accessibility: {data.accessibility}</Box>
        <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
          How possible an event is to do with 0 being the most accessible (0 -
          1)
        </Box>
      </Box>
      <Box
        p={2}
        mb={4}
        shadow="2px 2px 6px #bababa"
        borderRadius={8}
        _hover={{ bg: "gray.100" }}
      >
        <Box ml={4}>Participants: {data.participants}</Box>
        <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
          The number of people that this activity could involve (0 - N)
        </Box>
      </Box>
      <Box
        p={2}
        mb={4}
        shadow="2px 2px 6px #bababa"
        borderRadius={8}
        _hover={{ bg: "gray.100" }}
      >
        <Box ml={4}>Price: {data.price}</Box>
        <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
          The cost of the event with zero being free (0 - 1)
        </Box>
      </Box>
      <HStack mt={10}>
        <NextLink href="/">
          <Button size="lg" shadow="md" leftIcon={<BsChevronLeft />}>
            Back
          </Button>
        </NextLink>
        <Spacer />
        <NextLink href="/random">
          <Button size="lg" shadow="md" colorScheme="teal">
            Another activity
          </Button>
        </NextLink>
      </HStack>
    </Container>
  );
};

export default random;

export async function getServerSideProps() {
  const req = await fetch("http://www.boredapi.com/api/activity/", {
    method: "GET",
  });
  const data: DataType = await req.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
