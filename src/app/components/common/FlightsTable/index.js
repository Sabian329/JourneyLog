import React from "react";
import {
  WrapperTable,
  Cells,
  CellsHeaders,
  MainHeaders,
  MajorCells,
} from "./styled";

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
      <table>
        <WrapperTable>
          <tr>
            <MainHeaders>Date</MainHeaders>
            <MainHeaders>Fuel</MainHeaders>
            <MainHeaders>Route</MainHeaders>
            <MainHeaders>Flight Time</MainHeaders>
            <MainHeaders>Plane FT</MainHeaders>
          </tr>
          <tr>
            <Cells>{data}</Cells>
            <MajorCells>
              <tr>
                <CellsHeaders>rem</CellsHeaders>
                <CellsHeaders>up</CellsHeaders>
                <CellsHeaders>total</CellsHeaders>
              </tr>
              <tr>
                <Cells>{remFuel}</Cells>
                <Cells>{upFuel}</Cells>
                <Cells>{totalFuel}</Cells>
              </tr>
            </MajorCells>
            <MajorCells>
              <tr>
                <CellsHeaders>from</CellsHeaders>
                <CellsHeaders>to</CellsHeaders>
              </tr>
              <tr>
                <Cells>{from}</Cells>
                <Cells>{to}</Cells>
              </tr>
            </MajorCells>
            <MajorCells>
              <tr>
                <CellsHeaders>take of</CellsHeaders>
                <CellsHeaders>Landing</CellsHeaders>
                <CellsHeaders>Total</CellsHeaders>
              </tr>
              <tr>
                <Cells>{takeOf}</Cells>
                <Cells>{land}</Cells>
                <Cells>{totalFT}</Cells>
              </tr>
            </MajorCells>
            <MajorCells>
              <tr>
                <CellsHeaders>Previous</CellsHeaders>
                <CellsHeaders>Current</CellsHeaders>
              </tr>
              <tr>
                <Cells>{prev}</Cells>
                <Cells>{current}</Cells>
              </tr>
            </MajorCells>
          </tr>
        </WrapperTable>
      </table>
    </>
  );
};
