import React from "react";
import { styled } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { ActiveMessagesWindow } from "./MessagesWindow/ActiveMessagesWindow";
import { HistoryMessagesWindow } from "./MessagesWindow/HistoryMessagesWindow";
import { StyledMessageWindow } from "./MessagesWindow/style";

const ChatContainer = styled("section")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Chat = () => {
  return (
    <ChatContainer>
      <StyledMessageWindow>
        <HistoryMessagesWindow />
        <ActiveMessagesWindow />
      </StyledMessageWindow>
      <MessageInput />
    </ChatContainer>
  );
};
