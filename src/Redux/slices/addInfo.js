import { createSlice } from "@reduxjs/toolkit";
export const addInfo = createSlice({
  name: "information",
  initialState: {
    list: 100,
  },
  reducers: {
    addItem(state, action) {
      state.list = state.list + 1;
    },
    deleteItem(state, action) {
      state.list = state.list - 1;
    },
  },
});

export const { addItem, deleteItem } = addInfo.actions;
export default addInfo.reducer;
