import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "../services/login";
import authReducer from "../features/auth/auth-slice";
import formReducer from "../features/form/form-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(loginApi.middleware),
});

setupListeners(store.dispatch);
