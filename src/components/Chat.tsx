import React from "react";
import { styled } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { MessagesWindow } from "./MessagesWindow";

const ChatContainer = styled("section")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Chat = () => {
  return (
    <ChatContainer>
      <MessagesWindow />
      <MessageInput />
    </ChatContainer>
  );
};
