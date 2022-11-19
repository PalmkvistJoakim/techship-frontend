import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "stage" as string,
  initialState: "APPLIED" as string,
  reducers: {
    setStage: (stage, action) => {
      return action.payload;
    },
  },
});
export const { setStage } = slice.actions;
export default slice.reducer;
