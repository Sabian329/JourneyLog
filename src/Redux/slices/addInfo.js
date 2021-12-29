import { createSlice } from "@reduxjs/toolkit";
export const addInfoSlice = createSlice({
  name: "information",
  initialState: {
    pilot: { name: "jan" },
    plane: {
      type: "",
      sn: "",
      reg: "",
    },
    validate: { isValidate: false },
  },
  reducers: {
    addAircraftInfo(state, action) {
      state.plane = { ...state.plane, ...action.payload };
    },
    addAircraftPilot(state, action) {
      state.pilot = { name: action.payload };
    },
    validateForm(state, action) {
      state.validate = { isValidate: action.payload };
    },
  },
});

export const { addAircraftPilot, addAircraftInfo, validateForm } =
  addInfoSlice.actions;
export default addInfoSlice.reducer;
