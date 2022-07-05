import { chatHistoryQuery } from "../firebase/queries/chatHistoryQuery";
import { chatMessageQuery } from "../firebase/queries/chatMessageQuery";
import { HistoryMessageList } from "../components/MessageList/HistoryMessageList";
import { ActiveMessageList } from "../components/MessageList/ActiveMessageList";
import { Chat } from "../components/Chat/Chat";
import React from "react";

export const DeletedPage = () => {
  return (
    <Chat
      historyQuery={chatHistoryQuery}
      messageQuery={chatMessageQuery}
      messageType="Deleted"
      writable={false}
    >
      <HistoryMessageList />
      <ActiveMessageList />
    </Chat>
  );
};
