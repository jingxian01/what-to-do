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

interface PriceProps {}

export const Price: React.FC<PriceProps> = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const handleChange = (value: number | string) => {
    setValue(typeof value === "string" ? Number(value) : value);
  };
  const router = useRouter();

  return (
    <>
      <Button
        shadow="md"
        colorScheme="teal"
        onClick={() => setShowModal(!showModal)}
      >
        Price
      </Button>
      <Modal
        size="sm"
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Price</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={value}
                defaultValue={0}
                min={0}
                max={1}
                step={0.1}
                onChange={handleChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                defaultValue={0}
                min={0}
                max={1}
                step={0.1}
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
              The cost of the event with 0 being free (0 - 1)
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => router.push(`/price/${value}`)}
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
