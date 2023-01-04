import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getAllEntities: builder.query({
      query: () => "entities",
    }),
    getEntitieById: builder.query({
      query: (id) => `entities/${id}`,
    }),

    createEntitie: builder.mutation({
      query: (body) => ({
        url: "entities",
        method: "POST",
        body,
      }),
    }),
    updateEntitieById: builder.mutation({
      query: ({ id, body }) => ({
        url: `entities/${id}`,
        method: "PUT",
        body,
      }),
    }),

    deleteEntitieById: builder.mutation({
      query: (id) => ({
        url: `entities/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateEntitieMutation,
  useGetEntitieByIdQuery,
  useDeleteEntitieByIdMutation,
  useGetAllEntitiesQuery,
  useUpdateEntitieByIdMutation,
} = api;
