import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8080" });

export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
export const getUsers = createApi({
  reducerPath: "UsersApi",
  baseQuery,
  tagTypes: ["allUsers"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/hostel/data",
    }),
  }),
});
export const { useGetAllUsersQuery } = getUsers;
