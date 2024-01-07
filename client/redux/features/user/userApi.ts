import { apiSlice } from "../api/appSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "/update_avatar",
        method: "PATCH",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    editProfile: builder.mutation({
      query: ({ name, email }) => ({
        url: "/update_user_info",
        method: "PATCH",
        body: { name, email },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation, useEditProfileMutation } = userApi;
