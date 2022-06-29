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

const messageQuery = (startAfterKey: string) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    startAfter(startAfterKey),
    limit(5)
  );

export const fetchHistoryMessage = createAsyncThunk(
  "message/fetchHistoryMessage",
  async (fromMessage: DocumentData | null) => {
    const snapshotMessages = await getDocs(
      messageQuery(fromMessage?.createdAt)
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
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessageData: (state, action: PayloadAction<MessagePayload>) => {
      const { messageType, messageData } = action.payload;
      if (messageData) state[messageType] = messageData;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchHistoryMessage.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export const messageReducer = messageSlice.reducer;
