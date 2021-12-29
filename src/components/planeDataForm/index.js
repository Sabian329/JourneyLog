import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectInfo } from "../../Redux/selectors";
import { addAircraftInfo, validateForm } from "../../Redux/slices/addInfo";
import { Input } from "../ui/input/styled";
import { Form, InputWrapper, Submit, Wrapper } from "./styled";

export const PlaneDataForm = () => {
  const infoState = useSelector(selectInfo);
  const dispatch = useDispatch();
  const [value, setValue] = useState(
    useEffect(() => infoState.init, [infoState.init])
  );

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addAircraftInfo(value));
    dispatch(validateForm(true));
    window.location.replace("/flights");
  };

  return (
    <Wrapper>
      <h1>
        {`aircraft`.toUpperCase()}
        {infoState.list}
      </h1>
      <Form onSubmit={submitForm}>
        <InputWrapper>
          <label>{`type`.toUpperCase()}</label>
          <Input
            required
            name="type"
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                type: e.target.value.toUpperCase(),
              }))
            }
          />
        </InputWrapper>
        <InputWrapper>
          <label>{`serial number`.toUpperCase()}</label>
          <Input
            required
            name="serialNumber"
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                sn: e.target.value.toUpperCase(),
              }))
            }
          />
        </InputWrapper>
        <InputWrapper>
          <label>{`registration`.toUpperCase()}</label>
          <Input
            required
            type="text"
            name="registration"
            maxLength={7}
            minLength={6}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                reg: e.target.value.toUpperCase(),
              }))
            }
          />
        </InputWrapper>
        <Submit type="submit" value="NEXT" />
      </Form>
    </Wrapper>
  );
};
