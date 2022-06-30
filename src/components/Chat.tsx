import React, { useRef } from "react";
import { styled } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { ActiveMessagesWindow } from "./MessagesWindow/ActiveMessagesWindow";
import { HistoryMessagesWindow } from "./MessagesWindow/HistoryMessagesWindow";
import { StyledMessageWindow } from "./MessagesWindow/style";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchHistoryMessage } from "../store/reducers/messageSlice";
import { getFirstActiveMessage } from "../store/getters";

const ChatContainer = styled("section")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Chat = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollTop } = ref.current;
      if (scrollTop === 0) {
        dispatch(fetchHistoryMessage(getFirstActiveMessage()));
        // @ts-ignore
        ref.current.scrollTop = 40;
      }
    }
  };

  return (
    <ChatContainer>
      <StyledMessageWindow ref={ref} onScroll={onScroll}>
        <HistoryMessagesWindow />
        <ActiveMessagesWindow />
      </StyledMessageWindow>
      <MessageInput />
    </ChatContainer>
  );
};
