import { createSlice } from "@reduxjs/toolkit";
import { IVideoask } from "../types/IVideoAsk";

const slice = createSlice({
  name: "filteredApplicants" as string,
  initialState: [] as IVideoask[],
  reducers: {
    filterApplicant: (applicants, action) => {
      return action.payload;
    },
  },
});

export const { filterApplicant } = slice.actions;
export default slice.reducer;
