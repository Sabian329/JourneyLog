import { createSlice } from "@reduxjs/toolkit";
export const addTableSlice = createSlice({
  name: "table",
  initialState: {
    table: {
      data: "02.04.2021r",
      le: "1",
      remFuel: "100l",
      upFuel: "20l",
      totalFuel: "150l",
      from: "EPWR",
      to: "EPLS",
      takeOf: "10:12",
      land: "10:12",
      totalFT: "01:12",
      prev: "104,12",
      current: "114,24",
    },
    table1: {
      data: "04.01.2020",
      le: "1",
      remFuel: "100",
      upFuel: "50",
      totalFuel: "150",
      from: "epwr",
      to: "epbr",
      takeOf: "06.00",
      land: "07;00",
      totalFT: "01:00",
      prev: "2458,25",
      current: "2459,25",
    },
  },
  reducers: {
    addTable(state, action) {
      state = { ...state, ...action.payload };
    },
  },
});

export const { addTable } = addTableSlice.actions;
export default addTableSlice.reducer;
