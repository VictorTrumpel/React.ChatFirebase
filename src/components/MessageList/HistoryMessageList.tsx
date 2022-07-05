import React, { useEffect, useMemo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { chatSlice } from "../../store/reducers/chatSlice";
import { store } from "../../store/store";
import { useChat } from "../Chat/ChatContext";
import { MessageDictionary } from "../Message/MessageDictionary";

const clearHistoryOnUnmount = () => {
  return () => {
    store.dispatch(chatSlice.actions.clearHistory());
  };
};

export const HistoryMessageList = () => {
  const { messageType } = useChat();
  const { historyMessage } = useAppSelector((state) => state.chatReducer);

  const Message = useMemo(() => MessageDictionary[messageType], []);

  useEffect(clearHistoryOnUnmount, []);

  return (
    <>
      {historyMessage?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={`history-${message.id}`} message={message} />;
      })}
    </>
  );
};
