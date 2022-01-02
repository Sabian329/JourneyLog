import React from "react";
import { useSelector } from "react-redux";
import { selectInfo } from "../../../../Redux/selectors";
import { Input } from "../../../ui/input/styled";
import { InputWrapper } from "./styled";

export const InfoFormInput = ({ setValue, name, reduxName }) => {
  const infoState = useSelector(selectInfo);
  return (
    <InputWrapper>
      <label>{name.toUpperCase()}</label>
      <Input
        type="text"
        name={name}
        placeholder={infoState.plane[reduxName]}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            [reduxName]: e.target.value.toUpperCase(),
          }))
        }
      />
    </InputWrapper>
  );
};
