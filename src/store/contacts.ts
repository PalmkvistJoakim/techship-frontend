import { createSlice } from "@reduxjs/toolkit";
import { IContactId } from "../types/IVideoAsk";

const slice = createSlice({
  name: "contacts" as string,
  initialState: [] as IContactId[],
  reducers: {
    loadContacts: (contacts, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;

export const { loadContacts } = slice.actions;
