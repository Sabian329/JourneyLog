import React from "react";
import { Input } from "../../components/input/styled";
import { PlaneType } from "../../components/planeType";
import { InputWrapper, Wrapper } from "./styled";

export const MainView = () => {
  return (
    <Wrapper>
      <header>Journey Log</header>
      <InputWrapper>
        <label>{`pic name`.toUpperCase()}</label>
        <Input name="name" />
      </InputWrapper>
      <PlaneType />
    </Wrapper>
  );
};
