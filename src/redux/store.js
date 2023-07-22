import { configureStore } from "@reduxjs/toolkit";
import gistsSlice from "./slices/gistsSlice";

export const store = configureStore({
  reducer: {
    gistsSlice,
  },
});
