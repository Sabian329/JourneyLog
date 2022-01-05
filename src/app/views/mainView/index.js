import React from "react";
import { PlaneInfoForm } from "../../components/common/PlaneInfoForm";
import { Wrapper } from "./styled";

export const MainView = () => {
  return (
    <Wrapper>
      <PlaneInfoForm isReq={true} btnName="NEXT" />
    </Wrapper>
  );
};
