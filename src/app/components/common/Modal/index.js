import React from "react";
import { MainWrapper, ModalBody } from "./styled";

export const Modal = ({
  name,
  setIsModalOpen,
  children,
  setIsTableModalOpen,
}) => {
  const closeWrapper = (e) => e.stopPropagation();

  return (
    <MainWrapper
      onClick={() =>
        name === "edit" ? setIsModalOpen(false) : setIsTableModalOpen(false)
      }
    >
      <ModalBody onClick={(e) => closeWrapper(e)}>{children}</ModalBody>
    </MainWrapper>
  );
};
