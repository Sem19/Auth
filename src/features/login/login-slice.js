import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogined: false,
  },
  reducers: {
    updateIsLogin: (state, action) => {
      state.isLogined = action.payload;
    },
  },
});

export const { updateIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
