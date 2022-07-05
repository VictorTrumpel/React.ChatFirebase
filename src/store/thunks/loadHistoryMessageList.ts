import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData, getDocs, Query } from "firebase/firestore";
import { getHistoryMessages, getLastActiveMessage } from "../getters";

export const loadHistoryMessageList = createAsyncThunk(
  "message/fetchHistoryMessage",
  async (historyQuery: (startAfterKey: string) => Query<DocumentData>) => {
    const history = getHistoryMessages();
    const lastActiveMessage = getLastActiveMessage();

    const startAfterMessage =
      history.length === 0 ? lastActiveMessage : history[history.length - 1];

    const snapshotMessages = await getDocs(
      historyQuery(startAfterMessage?.createdAt)
    );

    const rec: any[] = [];
    snapshotMessages.forEach((doc) => {
      rec.push(doc.data());
    });

    return rec;
  }
);
