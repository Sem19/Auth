import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
  },
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload;
    },
    clearFormData: (state) => {
      state.data = {};
    },
  },
});

export const { saveFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
