import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gistsList: [],
  isLoading: false,
};

export const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {
    setGists: (state, action) => {
      state.gistsList = action.payload;
    },
    gitsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGists, gitsLoading } = gistsSlice.actions;

export default gistsSlice.reducer;
