import { createSlice } from "@reduxjs/toolkit";
export const addInfoSlice = createSlice({
  name: "information",
  initialState: {
    pilot: { name: "" },
    plane: {
      type: "",
      sn: "",
      reg: "",
    },
  },
  reducers: {
    addAircraftInfo(state, action) {
      state.plane = { ...state.plane, ...action.payload };
    },
    addAircraftPilot(state, action) {
      state.pilot = { name: action.payload };
    },
  },
});

export const { addAircraftPilot, addAircraftInfo } = addInfoSlice.actions;
export default addInfoSlice.reducer;
