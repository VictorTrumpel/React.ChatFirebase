import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query, limit, DocumentData } from "firebase/firestore";
import { messagesCollection } from "../firebase/FireBase";
import { styled } from "@mui/material";
import { Message } from "./Message";

const StyledMessageWindow = styled("div")(() => ({
  flex: "1",
  overflowY: "auto",
  display: "flex",
  justifyContent: "end",
  flexDirection: "column",
}));

const messageQuery = query(
  messagesCollection,
  orderBy("createdAt", "desc"),
  limit(10)
);

export const ActiveMessagesWindow = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const lastMessage = useRef<DocumentData | null>(null);

  const [messages] = useCollectionData(messageQuery);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <StyledMessageWindow>
      {messages?.map((_, idx, messages) => {
        if (idx === 0) {
          lastMessage.current = messages[idx];
        }

        const message = messages[messages.length - (idx + 1)];

        return <Message key={idx} message={message} />;
      })}
      <div ref={bottomRef} />
    </StyledMessageWindow>
  );
};
