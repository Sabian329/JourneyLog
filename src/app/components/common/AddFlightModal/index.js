import React from "react";
import { MainWrapper, ModalBody } from "./styled";

export const AddFlightModal = ({ setIsModalOpen, children }) => {
  const closeWrapper = (e) => e.stopPropagation();

  return (
    <MainWrapper onClick={() => setIsModalOpen(false)}>
      <ModalBody onClick={(e) => closeWrapper(e)}>{children}</ModalBody>
    </MainWrapper>
  );
};
