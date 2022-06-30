import React, { useRef } from "react";
import { styled } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { ActiveMessagesWindow } from "./MessagesWindow/ActiveMessagesWindow";
import { HistoryMessagesWindow } from "./MessagesWindow/HistoryMessagesWindow";
import { StyledMessageWindow } from "./MessagesWindow/style";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  fetchHistoryMessage,
  messageSlice,
} from "../store/reducers/messageSlice";
import { getFirstActiveMessage } from "../store/getters";

const ChatContainer = styled("section")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Chat = () => {
  const dispatch = useAppDispatch();
  const chatWindow = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (chatWindow.current) {
      const { scrollTop } = chatWindow.current;
      if (scrollTop === 0) {
        dispatch(fetchHistoryMessage(getFirstActiveMessage()));
        // @ts-ignore
        chatWindow.current.scrollTop = 40;
      }
    }
  };

  const onChange = () => {
    dispatch(messageSlice.actions.clearHistory());
    // @ts-ignore
    chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
  };

  return (
    <ChatContainer>
      <StyledMessageWindow ref={chatWindow} onScroll={onScroll}>
        <HistoryMessagesWindow />
        <ActiveMessagesWindow onChange={onChange} />
      </StyledMessageWindow>
      <MessageInput onSendMessage={onChange} />
    </ChatContainer>
  );
};
