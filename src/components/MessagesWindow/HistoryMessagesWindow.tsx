import React, { useRef, useEffect } from "react";
import { Message } from "../Message";
import { useAppSelector } from "../../hooks/useAppSelector";
import { messageSlice } from "../../store/reducers/messageSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const HistoryMessagesWindow = () => {
  const dispatch = useAppDispatch();
  const { historyMessage } = useAppSelector((state) => state.messageReducer);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      dispatch(messageSlice.actions.clearHistory());
    };
  }, []);

  return (
    <div ref={ref} className="history-messages">
      {historyMessage?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
};
