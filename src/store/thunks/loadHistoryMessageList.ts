import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { getHistoryMessages, getLastActiveMessage } from "../getters";
import { messagesCollection } from "../../firebase/FireBase";

const messageQuery = (startAfterKey: string) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    startAfter(startAfterKey),
    limit(20)
  );

export const loadHistoryMessageList = createAsyncThunk(
  "message/fetchHistoryMessage",
  async () => {
    const history = getHistoryMessages();
    const lastActiveMessage = getLastActiveMessage();

    const startAfterMessage =
      history.length === 0 ? lastActiveMessage : history[history.length - 1];

    const snapshotMessages = await getDocs(
      messageQuery(startAfterMessage?.createdAt)
    );

    const rec: any[] = [];
    snapshotMessages.forEach((doc) => {
      rec.push(doc.data());
    });

    return rec;
  }
);
