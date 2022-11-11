import { createSlice } from "@reduxjs/toolkit";
import { IVideoask } from "../types/IVideoAsk";

const slice = createSlice({
  name: "applicant" as string,
  initialState: [] as IVideoask[],
  reducers: {
    loadApplicant: (applicants, action) => {
      return action.payload.filter(
        (applicant: IVideoask) => applicant.name !== null
      );
    },
    filterApplicant: (applicants, action) => {
      return applicants.filter((applicant: IVideoask) =>
        applicant.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
  },
});

export const { loadApplicant, filterApplicant } = slice.actions;
export default slice.reducer;
