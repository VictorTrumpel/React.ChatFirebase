import React from "react";
import { Chat } from "../components/Chat/Chat";
import { HistoryMessageList } from "../components/MessageList/HistoryMessageList";
import { ActiveMessageList } from "../components/MessageList/ActiveMessageList";
import { chatMessageQuery } from "../firebase/queries/chatMessageQuery";
import { chatHistoryQuery } from "../firebase/queries/chatHistoryQuery";

export const ChatPage = () => {
  return (
    <Chat
      historyQuery={chatHistoryQuery}
      messageQuery={chatMessageQuery}
      messageType="Common"
    >
      <HistoryMessageList />
      <ActiveMessageList />
    </Chat>
  );
};
