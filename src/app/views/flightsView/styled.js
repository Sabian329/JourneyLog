import styled from "styled-components";

import { colorPalete } from "../../theme/colors";

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: ${colorPalete.f};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    color: #fff;
  }
`;
