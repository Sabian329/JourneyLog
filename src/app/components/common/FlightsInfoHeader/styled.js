import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: 6rem;
  background-color: #000;
  margin: 0;
`;
export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  h1 {
    margin: 0;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Animation = styled(motion.div)`
  display: flex;
  justify-content: space-around;
`;
