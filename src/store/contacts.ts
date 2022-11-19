import { createSlice } from "@reduxjs/toolkit";
import { IContactId } from "../types/IVideoAsk";

const slice = createSlice({
  name: "contacts" as string,
  initialState: [] as IContactId[],
  reducers: {
    loadContacts: (contacts, action) => {
      return action.payload;
    },
    getEmails: (sate, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;

export const { loadContacts, getEmails } = slice.actions;

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
