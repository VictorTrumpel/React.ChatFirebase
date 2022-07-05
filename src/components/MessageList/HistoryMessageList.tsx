import React, { useEffect } from "react";
import { Message } from "../Message/Message";
import { useAppSelector } from "../../hooks/useAppSelector";
import { chatSlice } from "../../store/reducers/chatSlice";
import { store } from "../../store/store";

const clearHistoryOnUnmount = () => {
  return () => {
    store.dispatch(chatSlice.actions.clearHistory());
  };
};

export const HistoryMessageList = () => {
  const { historyMessage } = useAppSelector((state) => state.chatReducer);

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
