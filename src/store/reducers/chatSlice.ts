import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { loadHistoryMessageList } from "../thunks/loadHistoryMessageList";

type MessageInitialState = {
  historyMessage: DocumentData[];
  lastActiveMessage: null | DocumentData;
  chatHistoryIsLoading: boolean;
};

const initialState: MessageInitialState = {
  historyMessage: [],
  lastActiveMessage: null,
  chatHistoryIsLoading: false,
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
    builder.addCase(loadHistoryMessageList.pending, (state) => {
      state.chatHistoryIsLoading = true;
    });
    builder.addCase(loadHistoryMessageList.fulfilled, (state, action) => {
      state.chatHistoryIsLoading = false;
      state.historyMessage.push(...action.payload);
    });
  },
});

export const chatReducer = chatSlice.reducer;
