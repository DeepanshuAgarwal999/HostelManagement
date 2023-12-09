import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
