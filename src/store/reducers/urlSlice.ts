import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UrlInitialState = { url: string };

const initialState: UrlInitialState = { url: "" };

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    changeUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const urlReducer = urlSlice.reducer;
