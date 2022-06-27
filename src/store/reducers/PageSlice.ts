import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PageState = "message" | "favorite" | "deleted" | "members";
type PageInitialState = { page: PageState };

const initialState: PageInitialState = { page: "message" };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<PageState>) => {
      state.page = action.payload;
    },
  },
});

export const pageReducer = pageSlice.reducer;
