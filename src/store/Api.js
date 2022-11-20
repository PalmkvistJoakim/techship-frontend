import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IKomment } from "../types/IVideoAsk";

export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Comments", "Category"],
  endpoints: (builder) => ({
    //comment mongodb
    commentsDb: builder.query({
      query: () => "/application",
      providesTags: ["Comments"],
    }),
    commentsAdd: builder.mutation({
      query: (comment) => ({
        url: "/application",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    commentsRemove: builder.mutation({
      query: (id) => ({
        url: `/application/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comments"],
    }),
    // category
    GetCategories: builder.query({
      query: () => "/category",
      providesTags: ["Category"],
    }),
    AddCategory: builder.mutation({
      query: (data) => ({
        url: `/category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    RemoveCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCommentsDbQuery,
  useGetCategoriesQuery,
  useCommentsAddMutation,
  useCommentsRemoveMutation,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
} = Api;
