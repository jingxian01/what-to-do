import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

interface TypeProps {
  isMobile?: boolean;
}

const typeList = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

export const Type: React.FC<TypeProps> = ({ isMobile }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <Button
        shadow="md"
        colorScheme="teal"
        w={isMobile ? "100%" : ""}
        onClick={() => setShowModal(!showModal)}
      >
        Type
      </Button>
      <Modal
        size="sm"
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Select type"
              onChange={(val) => {
                setValue(val.target.value);
              }}
            >
              {typeList.map((t) => {
                return (
                  <option key={t} value={t}>
                    {t}
                  </option>
                );
              })}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => {
                router.push(`/type/${value}`);
              }}
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
