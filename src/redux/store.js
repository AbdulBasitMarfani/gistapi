import { configureStore } from "@reduxjs/toolkit";
import gistsSlice from "./slices/gitsSlice";

export const store = configureStore({
  reducer: {
    gistsSlice,
  },
});
