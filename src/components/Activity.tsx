import { Badge, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { DataType } from "../utils/DataType";
import { typesColor } from "../utils/typesColor";
import NextLink from "next/link";

interface ActivityProps {
  data: DataType;
}

export const Activity: React.FC<ActivityProps> = ({ data }) => {
  return (
    <>
      {!data.error ? (
        <Box>
          <Box
            p={2}
            mb={6}
            shadow="2px 2px 6px #bababa"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
          >
            <Box ml={4}>Activity: {data.activity}</Box>
          </Box>
          <Box
            p={2}
            mb={6}
            shadow="2px 2px 6px #bababa"
            borderRadius={4}
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
              mb={6}
              shadow="2px 2px 6px #bababa"
              borderRadius={4}
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
            mb={6}
            shadow="2px 2px 6px #bababa"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
          >
            <Box ml={4}>Accessibility: {data.accessibility}</Box>
            <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
              How possible an event is to do with 0 being the most accessible (0
              - 1)
            </Box>
          </Box>
          <Box
            p={2}
            mb={6}
            shadow="2px 2px 6px #bababa"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
          >
            <Box ml={4}>Participants: {data.participants}</Box>
            <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
              The number of people that this activity could involve (0 - N)
            </Box>
          </Box>
          <Box
            p={2}
            mb={6}
            shadow="2px 2px 6px #bababa"
            borderRadius={4}
            _hover={{ bg: "gray.100" }}
          >
            <Box ml={4}>Price: {data.price}</Box>
            <Box ml={8} fontSize="sm" fontStyle="italic" color="gray.500">
              The cost of the event with 0 being free (0 - 1)
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>{`Sorry. ${data.error}`}</Box>
      )}
    </>
  );
};
