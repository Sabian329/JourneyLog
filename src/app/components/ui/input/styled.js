import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff65;
  border: none;
  width: 15rem;
  height: 0.5rem;
  z-index: 10;
  border-radius: 10px;
  color: #ffffff;
  padding: 1rem;
  :focus {
    outline: none;
    background-color: #c4c4c4;
  }
  ::placeholder {
    color: #ffffff;
  }
`;
export const InputTableUI = styled.input`
  background-color: #000;
  border: none;
  height: 0.5rem;
  z-index: 10;
  border-radius: 10px;
  color: #ffffff;
  padding: 1rem;
  :focus {
    outline: none;
    background-color: #c4c4c4;
  }
  ::placeholder {
    color: #ffffff;
  }
`;
