import { createSlice } from "@reduxjs/toolkit";
import { StageType } from "../types/IStage";

const slice = createSlice({
  name: "stage" as string,
  initialState: [],
  reducers: {
    loadStage: (stage, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;
export const { loadStage } = slice.actions;
