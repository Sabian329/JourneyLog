import React from "react";
import { DataCell, HeaderCells, WrapperTable } from "./styled";

export const FlightsTable = ({
  data,
  remFuel,
  totalFuel,
  upFuel,
  from,
  to,
  takeOf,
  land,
  totalFT,
  prev,
  current,
}) => {
  return (
    <>
      <WrapperTable>
        <tbody>
          <tr>
            <td>Date</td>
            <td colSpan="3">Fuel</td>
            <td colSpan="2">Route</td>
            <td colSpan="3">Flight Time</td>
            <td colSpan="2">Plane FT</td>
          </tr>
          <tr>
            <DataCell rowSpan="3">{data}</DataCell>
            <HeaderCells>rem</HeaderCells>
            <HeaderCells>up</HeaderCells>
            <HeaderCells>total</HeaderCells>
            <HeaderCells>from</HeaderCells>
            <HeaderCells>to</HeaderCells>
            <HeaderCells>start</HeaderCells>
            <HeaderCells>landing</HeaderCells>
            <HeaderCells>total</HeaderCells>
            <HeaderCells>current</HeaderCells>
            <HeaderCells>total</HeaderCells>
          </tr>
          <tr>
            <DataCell>{remFuel}</DataCell>
            <DataCell>{upFuel}</DataCell>
            <DataCell>{totalFuel}</DataCell>
            <DataCell>{from}</DataCell>
            <DataCell>{to}</DataCell>
            <DataCell>{takeOf}</DataCell>
            <DataCell>{land}</DataCell>
            <DataCell>{totalFT}</DataCell>
            <DataCell>{prev}</DataCell>
            <DataCell>{current}</DataCell>
          </tr>
          <tr></tr>
        </tbody>
      </WrapperTable>
    </>
  );
};
