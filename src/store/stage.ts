import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "stage" as string,
  initialState: "" as string,
  reducers: {
    setStage: (stage, action) => {
      console.log("action.payload", action.payload);
      return action.payload;
    },
  },
});
export const { setStage } = slice.actions;
export default slice.reducer;
