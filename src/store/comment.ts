import { createSlice } from "@reduxjs/toolkit";
import { IKomment } from "../types/IVideoAsk";

const slice = createSlice({
  name: "comments" as string,
  initialState: [] as IKomment[],
  reducers: {
    loadComment: (comments, action) => {
      return action.payload;
    },
    deleteComment: (comments, action) => {
      return comments.filter((comment) => comment._id !== action.payload._id);
    },
  },
});

export const { loadComment, deleteComment } = slice.actions;
export default slice.reducer;
