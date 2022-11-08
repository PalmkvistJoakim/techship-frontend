import { createSlice } from "@reduxjs/toolkit";
import { IForm } from "../types/IVideoAsk";

const slice = createSlice({
  name: "forms" as string,
  initialState: [] as IForm[],
  reducers: {
    loadForm: (forms, action) => {
      return action.payload;
    },
  },
});

export const { loadForm } = slice.actions;
export default slice.reducer;
