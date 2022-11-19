import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "searchquery",
  initialState: "" as string,
  reducers: {
    searchQuery: (searchquery, action) => {
      return action.payload;
    },
  },
});

export const { searchQuery } = slice.actions;
export default slice.reducer;
