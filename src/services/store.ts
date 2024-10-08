import { configureStore } from "@reduxjs/toolkit";
import { reposApi } from "./reposApi";

export const store = configureStore({
  reducer: {
    [reposApi.reducerPath]: reposApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reposApi.middleware),
});
