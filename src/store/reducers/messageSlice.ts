import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MessageInitialState = { message: string };

const initialState: MessageInitialState = { message: "" };

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const messageReducer = messageSlice.reducer;
