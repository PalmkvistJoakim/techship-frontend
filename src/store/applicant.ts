import { createSlice } from "@reduxjs/toolkit";
import { IVideoask } from "../types/IVideoAsk";

const slice = createSlice({
  name: "applicant" as string,
  initialState: [] as IVideoask[],
  reducers: {
    loadApplicant: (applicants, action) => {
      return action.payload;
    },
    filterApplicant: (applicants, action) => {
      return applicants.filter((d: any) => d.name != null);
    },
  },
});

export const { loadApplicant, filterApplicant } = slice.actions;
export default slice.reducer;
