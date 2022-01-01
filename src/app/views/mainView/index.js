import React from "react";
import { Wrapper } from "./styled";
import { PlaneDataForm } from "../../components/common/PlaneDataForm";
export const MainView = () => {
  return (
    <Wrapper>
      <PlaneDataForm btnName="NEXT" />
    </Wrapper>
  );
};
