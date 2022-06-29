import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query } from "firebase/firestore";
import { messagesCollection } from "../firebase/FireBase";
import { Avatar, styled } from "@mui/material";

const StyledMessageWindow = styled("div")(() => ({
  flex: "1",
  overflowY: "auto",
  "& .message-container": {
    display: "flex",
    marginBottom: "30px",
  },
  "& .message-container_info": {
    marginLeft: "17px",
    "& strong": {
      color: "white",
    },
    "& p": {
      marginTop: "5px",
    },
  },
}));

export const MessagesWindow = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [messages] = useCollectionData(
    query(messagesCollection, orderBy("createdAt"))
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <StyledMessageWindow>
      {messages?.map((message, idx) => (
        <div key={idx} className="message-container">
          <Avatar src={message.photoUrl} />
          <div className="message-container_info">
            <strong>{message.displayName}</strong>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </StyledMessageWindow>
  );
};
