import styled from "styled-components";
import flightBack from "../../../assets/flightsBack.jpg";

export const Wrapper = styled.section`
  min-height: 100vh;
  background-image: url(${flightBack});
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    color: #fff;
  }
`;
