import { Chat } from "../components/Chat/Chat";
import { HistoryMessageList } from "../components/MessageList/HistoryMessageList";
import { ActiveMessageList } from "../components/MessageList/ActiveMessageList";
import React from "react";

export const ChatPage = () => {
  return (
    <Chat>
      <HistoryMessageList />
      <ActiveMessageList />
    </Chat>
  );
};
