import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: data,
      }),
    //   providesTags: ["User"],
    }),
  }),
  //   logout:builder.mutation({
  //     query:(data)=>({
  //         url:""
  //     })
  //   })
});
export const { useLoginMutation } = usersApiSlice;
