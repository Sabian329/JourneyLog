import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button";
import { Input } from "../../components/input/styled";
import { PlaneType } from "../../components/planeType";
import { selectInfo } from "../../Redux/selectors";
import { addAircraftInfo } from "../../Redux/slices/addInfo";
import { InputWrapper, Wrapper } from "./styled";

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
            setName((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </InputWrapper>
      <Button onClick={() => dispatch(addAircraftInfo(name))}>add</Button>
      <PlaneType />
    </Wrapper>
  );
};
