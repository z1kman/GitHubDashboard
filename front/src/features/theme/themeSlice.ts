
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
   /* eslint-disable */ 
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
   /* eslint-enable */ 
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
