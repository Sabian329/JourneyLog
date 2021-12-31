import { createSlice } from "@reduxjs/toolkit";
export const addInfoSlice = createSlice({
  name: "information",
  initialState: {
    headers: {
      name: "Pic Name",
      type: "Plane Type",
      sn: "Serial Number",
      reg: "Registration",
    },
    plane: {
      name: "JAN",
      type: "MS826A",
      sn: "88475B",
      reg: "SP-HKN",
    },
    validate: { isValidate: false },
  },
  reducers: {
    addAircraftInfo(state, action) {
      state.plane = { ...state.plane, ...action.payload };
    },

    validateForm(state, action) {
      state.validate = { isValidate: action.payload };
    },
  },
});

export const { addAircraftInfo, validateForm } = addInfoSlice.actions;
export default addInfoSlice.reducer;
