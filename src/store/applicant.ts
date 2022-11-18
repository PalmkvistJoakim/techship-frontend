import { createSlice } from "@reduxjs/toolkit";
import { IVideoask } from "../types/IVideoAsk";

const slice = createSlice({
  name: "applicant" as string,
  initialState: [] as IVideoask[],
  reducers: {
    loadApplicant: (applicants, action) => {
      action.payload.map(
        (applicant: any) =>
          (applicant.created_at = new Date(
            applicant.created_at
          ).toLocaleString())
      );
      return action.payload.filter(
        (applicant: IVideoask) => applicant.name !== null
      );
    },
    filterApplicant: (applicants, action) => {
      return applicants.filter((applicant: IVideoask) =>
        applicant.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    listGroupApplicant: (applicants, action) => {
      let filteredApplicants;
      let NewApplicationsFromDb = action.payload.ApplicationsFromDb.filter(
        (application: any) =>
          application.categoryId.name === action.payload.stage
      );
      console.log("NewApplicationsFromDb", NewApplicationsFromDb);
      return NewApplicationsFromDb.map((a: any) => {
        filteredApplicants = applicants.filter(
          (applicant: any) => applicant.contact_id === a.contact_id
        );
      });
    },
  },
});

export const { loadApplicant, filterApplicant, listGroupApplicant } =
  slice.actions;
export default slice.reducer;
