import { limit, orderBy, query, startAfter } from "firebase/firestore";
import { messagesCollection } from "../FireBase";

export const chatHistoryQuery = (startAfterKey: string) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    startAfter(startAfterKey),
    limit(20)
  );
