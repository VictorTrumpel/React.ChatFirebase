import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

type MessageInitialState = {
  message: string;
  firstActiveMessage: null | DocumentData;
  lastMessage: null | DocumentData;
};

const initialState: MessageInitialState = {
  message: "",
  firstActiveMessage: null,
  lastMessage: null,
};

type MessagePayload = {
  messageType: "firstActiveMessage" | "lastMessage";
  messageData?: DocumentData;
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessageData: (state, action: PayloadAction<MessagePayload>) => {
      const { messageType, messageData } = action.payload;
      if (messageData) state[messageType] = messageData;
    },
  },
});

export const messageReducer = messageSlice.reducer;
