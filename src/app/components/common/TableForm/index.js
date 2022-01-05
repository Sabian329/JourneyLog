import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTable } from "../../../Redux/selectors";
import { addTable } from "../../../Redux/slices/addTable";
import { Button } from "../../ui/buttons/styled";
import { Wrapper } from "./styled";
import { TableFormInput } from "./TableFormInput";
import { DateTime } from "luxon";

export const TableForm = () => {
  const [tableStateLocal, setTableStateLocal] = useState({});
  const tableState = useSelector(selectTable);
  const dispath = useDispatch();

  const add = () => {
    dispath(
      addTable({
        [`table${Object.keys(tableState.tables).length + 1}`]: tableStateLocal,
      })
    );
  };

  useEffect(
    ({ remFuel, upFuel, takeOf, land, data, prev } = tableStateLocal) => {
      let totalFuel = parseInt(remFuel, 10) + parseInt(upFuel, 10);

      let takeofTime = DateTime.fromISO(`${data}T${takeOf}`);

      let landingTime = DateTime.fromISO(`${data}T${land}`);

      let totalFlightTime = landingTime.diff(takeofTime, [
        "hours",
        "minutes",
      ])?.values;

      let totalFTMinutes =
        parseInt(prev, 10) +
        Math.round(
          (landingTime.diff(takeofTime, ["minutes"]).values?.minutes / 60) * 100
        ) /
          100;

      let h =
        totalFlightTime?.hours >= 10
          ? `${totalFlightTime?.hours}`
          : `0${totalFlightTime?.hours}`;

      let min =
        totalFlightTime?.minutes >= 10
          ? `${totalFlightTime?.minutes}`
          : `0${totalFlightTime?.minutes}`;

      setTableStateLocal((prev) => ({
        ...prev,
        totalFuel: totalFuel || 0,
        totalFT: `${h}:${min}`,
        current: totalFTMinutes || 0,
      }));
    },
    [
      tableStateLocal.takeOf,
      tableStateLocal.data,
      tableStateLocal.land,
      tableStateLocal.prev,
    ]
  );

  return (
    <Wrapper>
      {Object.keys(tableState.labelNames).map((inputItem) => (
        <TableFormInput
          key={inputItem}
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
