import React from "react";
import { InputTableUI } from "../../../ui/input/styled";
import { InputWrapper } from "./styled";

export const TableFormInput = ({
  name,
  type,
  setTableStateLocal,
  reduxName,
}) => {
  return (
    <InputWrapper>
      <label>{name}</label>
      <InputTableUI
        required
        type={type}
        onChange={(e) =>
          setTableStateLocal((prev) => ({
            ...prev,
            [reduxName]: e.target.value.toUpperCase(),
          }))
        }
      />
    </InputWrapper>
  );
};
