import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTable } from "../../../Redux/selectors";
import { addTable } from "../../../Redux/slices/addTable";
import { Button } from "../../ui/buttons/styled";
import { Wrapper } from "./styled";
import { TableFormInput } from "./TableFormInput";

export const TableForm = () => {
  const [tableStateLocal, setTableStateLocal] = useState({});
  const tableState = useSelector(selectTable);
  const dispath = useDispatch();
  const add = () =>
    dispath(
      addTable({
        [`table${Object.keys(tableState.tables).length + 1}`]: tableStateLocal,
      })
    );

  return (
    <Wrapper>
      {Object.keys(tableState.labelNames).map((inputItem) => (
        <TableFormInput
          setTableStateLocal={setTableStateLocal}
          tableStateLocal={tableStateLocal}
          name={tableState.labelNames[inputItem][0]}
          type={tableState.labelNames[inputItem][1]}
          reduxName={inputItem}
        />
      ))}
      <Button onClick={() => add()}>Click</Button>
    </Wrapper>
  );
};
