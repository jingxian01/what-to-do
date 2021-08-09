import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

interface ParticipantsProps {
  isMobile?: boolean;
}

export const Participants: React.FC<ParticipantsProps> = ({ isMobile }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState<number>(1);
  const handleChange = (value: number | string) => {
    setValue(typeof value === "string" ? Number(value) : value);
  };
  const router = useRouter();

  return (
    <>
      <Button
        shadow="md"
        colorScheme="teal"
        w={isMobile ? "100%" : ""}
        onClick={() => setShowModal(!showModal)}
      >
        Participants
      </Button>
      <Modal
        size="sm"
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Participants</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={value}
                defaultValue={1}
                min={1}
                max={5}
                step={1}
                onChange={handleChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                defaultValue={1}
                min={1}
                max={5}
                step={1}
                flex="1"
                focusThumbOnChange={false}
                value={value}
                onChange={handleChange}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
            <Box mt={6} fontSize="sm" fontStyle="italic" color="gray.500">
              The number of people that this activity could involve (0 - 5)
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => router.push(`/participants/${value}`)}
            >
              Enter
            </Button>
            <Button variant="ghost" ml={4} onClick={() => setShowModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
