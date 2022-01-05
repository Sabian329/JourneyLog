import React from "react";
import { useSelector } from "react-redux";
import { selectInfo } from "../../../Redux/selectors";
import { InfoItem, Wrapper, Animation } from "./styled";

export const FlightsInfoHeader = ({ setIsModalOpen }) => {
  const infoState = useSelector(selectInfo);
  const stateArr = Object.keys(infoState.plane);
  return (
    <Wrapper>
      <Animation
        onClick={() => setIsModalOpen(true)}
        animate={{ opacity: [0, 1] }}
      >
        {stateArr.map((item) => (
          <InfoItem key={item}>
            <h1>{infoState.headers[item]}</h1>
            <p>{infoState.plane[item]}</p>
          </InfoItem>
        ))}
      </Animation>
    </Wrapper>
  );
};
