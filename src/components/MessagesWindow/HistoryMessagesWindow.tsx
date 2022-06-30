import React from "react";
import { Message } from "../Message";
import { useAppSelector } from "../../hooks/useAppSelector";

export const HistoryMessagesWindow = () => {
  const { historyMessage } = useAppSelector((state) => state.messageReducer);

  return (
    <div className="history-messages">
      {historyMessage?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={idx} message={message} />;
      })}
      <h5 style={{ textAlign: "center" }}>history message</h5>
      <hr />
    </div>
  );
};
