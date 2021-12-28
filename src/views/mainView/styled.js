import styled from "styled-components";
import back from "../../assets/loginBack.jpg";

export const Wrapper = styled.div`
  background-image: url(${back});
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  header {
    color: #ffffff;
    font-size: 3rem;
    font-weight: 300;
    margin: 1rem;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: max-content;
  label {
    padding: 0 0 0.7rem 0;
    color: #ffffff;
    font-size: 0.8rem;
  }
`;
