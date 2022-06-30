import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DocumentData,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { messagesCollection } from "../../firebase/FireBase";
import { getHistoryMessages } from "../getters";

type MessageInitialState = {
  historyMessage: DocumentData[];
  firstActiveMessage: null | DocumentData;
  lastMessage: null | DocumentData;
};

const initialState: MessageInitialState = {
  historyMessage: [],
  firstActiveMessage: null,
  lastMessage: null,
};

type MessagePayload = {
  messageType: "firstActiveMessage" | "lastMessage";
  messageData?: DocumentData;
};

const messageQuery = (startAfterKey: string) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    startAfter(startAfterKey),
    limit(20)
  );

export const fetchHistoryMessage = createAsyncThunk(
  "message/fetchHistoryMessage",
  async (fromMessage: DocumentData | null) => {
    const history = getHistoryMessages();

    const startMessage =
      history.length === 0 ? fromMessage : history[history.length - 1];

    const snapshotMessages = await getDocs(
      messageQuery(startMessage?.createdAt)
    );

    const rec: any[] = [];

    snapshotMessages.forEach((doc) => {
      rec.push(doc.data());
    });

    return rec;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessageData: (state, action: PayloadAction<MessagePayload>) => {
      const { messageType, messageData } = action.payload;
      if (messageData) state[messageType] = messageData;
    },
    clearHistory: (state) => {
      state.historyMessage.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistoryMessage.fulfilled, (state, action) => {
      state.historyMessage.push(...action.payload);
    });
  },
});

export const messageReducer = messageSlice.reducer;
