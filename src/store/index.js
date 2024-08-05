import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "../services/login";
import formReducer from "../features/form/form-slice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(loginApi.middleware),
});

setupListeners(store.dispatch);
