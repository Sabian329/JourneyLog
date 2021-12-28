import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/ui/input/styled";

import { selectInfo } from "../../Redux/selectors";
import { addAircraftPilot } from "../../Redux/slices/addInfo";
import { InputWrapper, Wrapper } from "./styled";
import { PlaneDataForm } from "../../components/planeDataForm";

export const MainView = () => {
  const infoState = useSelector(selectInfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(
    useEffect(() => infoState.init, [infoState.init])
  );

  return (
    <Wrapper>
      <header>Journey Log</header>
      <InputWrapper>
        <label>{`pic name`.toUpperCase()}</label>
        <Input
          name="name"
          onChange={(e) =>
            dispatch(addAircraftPilot(e.target.value.toUpperCase()))
          }
        />
      </InputWrapper>
      <PlaneDataForm />
    </Wrapper>
  );
};
