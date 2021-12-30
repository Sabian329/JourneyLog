import React from "react";
import { Input } from "../../ui/input/styled";
import { InputWrapper } from "./styled";

export const FormInput = ({ setValue, name, reduxName }) => {
  return (
    <InputWrapper>
      <label>{name.toUpperCase()}</label>
      <Input
        type="text"
        required
        name={name}
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
