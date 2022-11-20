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
      return action.payload;
    },
  },
});

export const { loadApplicant, filterApplicant } = slice.actions;
export default slice.reducer;

// let filteredApplicant = [];
//       //@ts-ignore
//       let filteredApplicants = [];
//       console.log(action.payload.comments);
//       let NewApplicationsFromDb = action.payload.comments.filter(
//         (application: any) =>
//           application.categoryId.name === action.payload.value
//       );
//       console.log(
//         "NewApplicationsFromDb",
//         action.payload.applicantsFromVideoAsk
//       );
//       for (const a of NewApplicationsFromDb) {
//         filteredApplicant = action.payload.applicantsFromVideoAsk.filter(
//           (applicant: any) => applicant.contact_id === a.contact_id
//         );
//         //@ts-ignore
//         filteredApplicants = filteredApplicants.concat(filteredApplicant);
//       }
