import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Comments", "Category", "Form"],
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
    GetFormVideask: builder.query({
      query: () => {
        const token = localStorage.getItem("access_token");
        return {
          providesTags: ["Form"],
          url: "/videoask/form",
          params: { token: token },
        };
      },
    }),
    GetApplicantIdVideask: builder.query({
      query: (id) => {
        const token = localStorage.getItem("access_token");
        return {
          url: `/videoask/form/${id}`,
          params: { token: token },
        };
      },
      invalidatesTags: ["Form"],
    }),
    GetUserbyIdVideask: builder.query({
      query: (id) => {
        const token = localStorage.getItem("access_token");
        const form = localStorage.getItem("form");
        return {
          url: `/videoask/users/${id}`,
          params: { token: token, form: form },
        };
      },
      invalidatesTags: ["Form"],
    }),
    RemoveProfileBYId: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("access_token");
        return {
          url: `/videoask/profile/${id}`,
          method: "GET",
          params: { token: token },
        };
      },
      invalidatesTags: ["Form"],
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
  useGetFormVideaskQuery,
  useGetApplicantIdVideaskQuery,
  useGetUserbyIdVideaskQuery,
  useRemoveProfileBYIdMutation,
} = Api;
