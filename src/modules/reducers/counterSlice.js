import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    theme: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = counterSlice.actions;

export const selectedTheme = (state) => state.counter.theme;

export default counterSlice.reducer;
