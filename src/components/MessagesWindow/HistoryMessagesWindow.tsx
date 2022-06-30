import React, { useEffect } from "react";
import { Message } from "../Message";
import { useAppSelector } from "../../hooks/useAppSelector";

export const HistoryMessagesWindow = () => {
  const { historyMessage } = useAppSelector((state) => state.messageReducer);

  useEffect(() => {
    console.log(historyMessage);
  }, [historyMessage]);

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
