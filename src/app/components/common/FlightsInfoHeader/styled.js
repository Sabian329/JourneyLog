import { motion } from "framer-motion";
import styled from "styled-components";
import { colorPalete } from "../../../theme/colors";

export const Wrapper = styled.header`
  width: 100vw;
  margin: 0 0 3rem 0;
  background-color: ${colorPalete.a};
`;
export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  h1 {
    margin: 0;
    color: ${colorPalete.f};
  }
`;
export const Animation = styled(motion.div)`
  display: flex;
  justify-content: space-around;
`;
