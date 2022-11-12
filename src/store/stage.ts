import { createSlice } from "@reduxjs/toolkit";

export interface ICategory {
  entities?: any;
  _id: string;
  name: string;
}

const slice = createSlice({
  name: "stage" as string,
  initialState: [] as ICategory[],
  reducers: {
    loadStage: (stage, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;
export const { loadStage } = slice.actions;
