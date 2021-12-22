import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../../Redux/selectors";
import { addItem } from "../../Redux/slices/addInfo";
import { Button } from "../button";
import { Input } from "../input/styled";
import { InputWrapper, Wrapper } from "./styled";

export const PlaneType = () => {
  const infoState = useSelector(selectInfo);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(addItem())} />
      <h1>
        {`aircraft`.toUpperCase()}
        {infoState.list}
      </h1>
      <InputWrapper>
        <label>{`type`.toUpperCase()}</label>
        <Input name="type" />
      </InputWrapper>
      <InputWrapper>
        <label>{`serial number`.toUpperCase()}</label>
        <Input name="serialNumber" />
      </InputWrapper>
      <InputWrapper>
        <label>{`registration`.toUpperCase()}</label>
        <Input name="registration" />
      </InputWrapper>
    </Wrapper>
  );
};
