import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: 60vh;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  h1 {
    font-size: 1.5rem;
    margin: 0.5rem;
    color: #ffffff;
    font-weight: 300;
    padding: 0;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: max-content;
  margin: 1rem;
  label {
    padding: 0 0 0.7rem 0;
    color: #ffffff;
    font-size: 0.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: max-content;
  margin: 1rem;
`;

export const Submit = styled.input`
  background-color: #c4c4c4;
  border: none;
  border-radius: 10px;
  width: 5rem;
  height: 2rem;
  color: #1c1c1c;
`;