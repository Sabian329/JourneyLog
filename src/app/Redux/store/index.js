import { configureStore } from "@reduxjs/toolkit";
import addInfoReducer from "../slices/addInfo";

export const store = configureStore({
  reducer: {
    information: addInfoReducer,
  },
});
