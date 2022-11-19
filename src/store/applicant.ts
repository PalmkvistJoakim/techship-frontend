import { createSlice } from "@reduxjs/toolkit";
import { array } from "joi";
import { filter } from "lodash";
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
      let filteredApplicant = [];
      let sho;
      //@ts-ignore
      let filteredApplicants: array = [];
      let NewApplicationsFromDb = action.payload.applicantsFromDb.filter(
        (application: any) =>
          application.categoryId.name === action.payload.value
      );
      for (const a of NewApplicationsFromDb) {
        filteredApplicant = action.payload.applicantsFromVideoAsk.filter(
          (applicant: any) => applicant.contact_id === a.contact_id
        );
        filteredApplicants = filteredApplicants.concat(filteredApplicant);
      }
      console.log("filteredApplicant", filteredApplicants);
      return filteredApplicants;
    },
  },
});

export const { loadApplicant, filterApplicant, listGroupApplicant } =
  slice.actions;
export default slice.reducer;

// filteredApplicant = action.payload.applicantsFromVideoAsk.filter(
//   (applicant: any) =>
//     applicant.contact_id ==
//     NewApplicationsFromDb.map((a: any) => a.contact_id)
// );
