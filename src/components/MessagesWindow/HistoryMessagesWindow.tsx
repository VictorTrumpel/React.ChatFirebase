import React, { useState } from "react";
import { DocumentData } from "firebase/firestore";
import { Message } from "../Message";

export const HistoryMessagesWindow = () => {
  const [messages] = useState<DocumentData[]>([]);

  return (
    <div className="history-messages">
      {messages?.map((message, idx) => {
        return <Message key={idx} message={message} />;
      })}
      <h5 style={{ textAlign: "center" }}>history message</h5>
      <hr />
    </div>
  );
};
