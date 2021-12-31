import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.78);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
export const ModalBody = styled.div`
  position: fixed;
  z-index: 1;
`;
