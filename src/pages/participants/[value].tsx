import { Button, HStack, Spacer } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import { Activity } from "../../components/Activity";
import { BrowserHead } from "../../components/BrowserHead";
import { Header } from "../../components/Header";
import { DataType } from "../../utils/DataType";
import NextLink from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
import { Container } from "../../components/Container";

const participants = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { value } = router.query;

  return (
    <Container>
      <BrowserHead title="Participants" />
      <Header />
      <Activity data={data} />
      <HStack mt={10}>
        <NextLink href="/">
          <Button shadow="md" leftIcon={<BsChevronLeft />}>
            Back
          </Button>
        </NextLink>
        <Spacer />
        <NextLink href={`/participants/${value}`}>
          <Button shadow="md" colorScheme="teal">
            Another activity
          </Button>
        </NextLink>
      </HStack>
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const value = params.value;
  const req = await fetch(
    `http://www.boredapi.com/api/activity?participants=${value}`,
    {
      method: "GET",
    }
  );
  const data: DataType = await req.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default participants;
