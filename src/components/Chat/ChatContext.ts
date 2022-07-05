import { DocumentData, Query } from "firebase/firestore";
import { createContext, useContext } from "react";

export type ChatContextType = {
  historyQuery: (startAfterKey: string) => Query<DocumentData>;
  messageQuery: () => Query<DocumentData>;
  messageType: "Common" | "Favorite";
};

export const ChatContext = createContext<ChatContextType | null>(null);

export const useChat = () => {
  const chatContext = useContext(ChatContext);
  if (!chatContext) throw new Error("useChat must be used within ChatContext");
  return chatContext;
};
