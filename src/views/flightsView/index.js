import React from "react";
import { useSelector } from "react-redux";
import { selectInfo } from "../../Redux/selectors";
import { Wrapper } from "./styled";

export const FlightsView = () => {
  const infoState = useSelector(selectInfo);

  return (
    <Wrapper>
      <p>{infoState.pilot.name}</p>
    </Wrapper>
  );
};
