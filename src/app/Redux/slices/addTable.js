import { createSlice } from "@reduxjs/toolkit";
export const addTableSlice = createSlice({
  name: "tableObject",
  initialState: {
    labelNames: {
      data: ["Date", "date"],
      remFuel: ["Rem", "number"],
      upFuel: ["Up +", "number"],
      // totalFuel: ["Total", "number"],
      from: ["From", "text"],
      to: ["To", "text"],
      takeOf: ["Take of", "time"],
      land: ["Landing", "time"],
      // totalFT: ["Total Time", "time"],
      prev: ["Previous", "number"],
      // current: ["Current", "number"],
    },
    tables: {
      table1: {
        data: "2022-01-04",
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
    },
  },

  reducers: {
    addTable(state, action) {
      state.tables = { ...state.tables, ...action.payload };
    },
  },
});

export const { addTable } = addTableSlice.actions;
export default addTableSlice.reducer;
