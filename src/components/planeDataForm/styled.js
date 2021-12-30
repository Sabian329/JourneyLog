import styled from "styled-components";
import { deviceMin } from "../../theme/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: max-content;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media ${deviceMin.laptop} {
    width: 20rem;
    position: unset;
    border-radius: 15px;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0;
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
