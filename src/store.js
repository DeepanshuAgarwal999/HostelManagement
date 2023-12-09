import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice,getUsers } from "./slices/apiSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [getUsers.reducerPath]: getUsers.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(apiSlice.middleware).concat(getUsers.middleware),
  devTools: true,
});

export default store;
