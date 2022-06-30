import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { loadHistoryMessageList } from "../thunks/loadHistoryMessageList";

type MessageInitialState = {
  historyMessage: DocumentData[];
  lastActiveMessage: null | DocumentData;
};

const initialState: MessageInitialState = {
  historyMessage: [],
  lastActiveMessage: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setLastActiveMessage: (
      state,
      action: PayloadAction<DocumentData | undefined>
    ) => {
      if (!action.payload) return;
      state.lastActiveMessage = action.payload;
    },
    clearHistory: (state) => {
      state.historyMessage.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadHistoryMessageList.fulfilled, (state, action) => {
      state.historyMessage.push(...action.payload);
    });
  },
});

export const messageReducer = chatSlice.reducer;
