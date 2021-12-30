import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../../../Redux/selectors";
import { addAircraftInfo, validateForm } from "../../../Redux/slices/addInfo";
import { FormInput } from "../FormInput";
import { SubmitBtn } from "../../ui/buttons/styled";
import { Form, Wrapper } from "./styled";

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
    // window.location.replace("/flights");
  };

  return (
    <Wrapper>
      <header>Journey Log</header>

      <Form onSubmit={submitForm}>
        <h1>
          {`pilot`.toUpperCase()}
          {infoState.list}
        </h1>
        <FormInput name="pic name" reduxName="name" setValue={setValue} />
        <h1>
          {`aircraft`.toUpperCase()}
          {infoState.list}
        </h1>
        <FormInput name="Type" reduxName="type" setValue={setValue} />
        <FormInput name="serial number" reduxName="sn" setValue={setValue} />
        <FormInput name="registration" reduxName="reg" setValue={setValue} />
        <SubmitBtn type="submit" value="NEXT" />
      </Form>
    </Wrapper>
  );
};
