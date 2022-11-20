import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "stage" as string,
  initialState: "636febaf89043be7c2d17c37" as string,
  reducers: {
    setStage: (stage, action) => {
      console.log("action.payload", action.payload);
      return action.payload;
    },
  },
});
export const { setStage } = slice.actions;
export default slice.reducer;
