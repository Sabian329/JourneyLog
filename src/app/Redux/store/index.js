import { configureStore } from "@reduxjs/toolkit";
import addInfoReducer from "../slices/addInfo";
import addTableReducer from "../slices/addTable";

export const store = configureStore({
  reducer: {
    information: addInfoReducer,
    table: addTableReducer,
  },
});
