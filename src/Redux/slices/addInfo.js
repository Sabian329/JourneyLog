import { createSlice } from "@reduxjs/toolkit";
export const addInfoSlice = createSlice({
  name: "information",
  initialState: {
    init: {
      name: "",
      type: "",
      sn: "",
      reg: "",
    },
  },
  reducers: {
    addAircraftInfo(state, action) {
      state.init = { ...state.init, ...action.payload };
    },
    deleteItem(state, action) {
      state.init = action.payload.x;
    },
  },
});

export const { addAircraftInfo, deleteItem } = addInfoSlice.actions;
export default addInfoSlice.reducer;
