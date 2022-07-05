import { limit, orderBy, query } from "firebase/firestore";
import { messagesCollection } from "../FireBase";

export const chatMessageQuery = () =>
  query(messagesCollection, orderBy("createdAt", "desc"), limit(100));
