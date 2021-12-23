import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectInfo } from "../../Redux/selectors";
import { addAircraftInfo } from "../../Redux/slices/addInfo";
import { Button } from "../button";
import { Input } from "../input/styled";
import { InputWrapper, Wrapper } from "./styled";

export const PlaneType = () => {
  const infoState = useSelector(selectInfo);
  const dispatch = useDispatch();
  const [value, setValue] = useState(
    useEffect(() => infoState.init, [infoState.init])
  );

  return (
    <Wrapper>
      <Button onClick={() => dispatch(addAircraftInfo(value))} />
      <h1>
        {`aircraft`.toUpperCase()}
        {infoState.list}
      </h1>
      <InputWrapper>
        <label>{`type`.toUpperCase()}</label>
        <Input
          name="type"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, type: e.target.value }))
          }
        />
      </InputWrapper>
      <InputWrapper>
        <label>{`serial number`.toUpperCase()}</label>
        <Input
          name="serialNumber"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, sn: e.target.value }))
          }
        />
      </InputWrapper>
      <InputWrapper>
        <label>{`registration`.toUpperCase()}</label>
        <Input
          name="registration"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, reg: e.target.value }))
          }
        />
      </InputWrapper>
    </Wrapper>
  );
};
