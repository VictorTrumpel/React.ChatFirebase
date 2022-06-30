import React, { useRef, useEffect } from "react";
import { Message } from "../Message";
import { useAppSelector } from "../../hooks/useAppSelector";
import { chatSlice } from "../../store/reducers/chatSlice";
import { store } from "../../store/store";

const clearHistoryOnUnmount = () => {
  return () => {
    store.dispatch(chatSlice.actions.clearHistory());
  };
};

export const HistoryMessageList = () => {
  const { historyMessage } = useAppSelector((state) => state.messageReducer);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(clearHistoryOnUnmount, []);

  return (
    <div ref={ref} className="history-messages">
      {historyMessage?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
};
