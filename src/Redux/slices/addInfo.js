import { createSlice } from "@reduxjs/toolkit";
export const addInfoSlice = createSlice({
  name: "information",
  initialState: {
    plane: {
      name: "",
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

    validateForm(state, action) {
      state.validate = { isValidate: action.payload };
    },
  },
});

export const { addAircraftPilot, addAircraftInfo, validateForm } =
  addInfoSlice.actions;
export default addInfoSlice.reducer;
