import React, { useRef, useLayoutEffect } from "react";
import { MessageInput } from "../MessageInput/MessageInput";
import { ActiveMessageList } from "../MessageList/ActiveMessageList";
import { HistoryMessageList } from "../MessageList/HistoryMessageList";
import { StyledMessageWindow } from "../MessageList/style";
import {
  fetchHistoryMessage,
  messageSlice,
} from "../../store/reducers/messageSlice";
import { getFirstActiveMessage } from "../../store/getters";
import { MessageWindowDOM } from "./MessageWindowDOM";
import { ChatContainer } from "./style";
import { store } from "../../store/store";

const messageWindow = new MessageWindowDOM();

export const Chat = () => {
  const messageWindowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    messageWindow.ref = messageWindowRef.current;
  }, []);

  return (
    <ChatContainer>
      <StyledMessageWindow
        ref={messageWindowRef}
        onScroll={onScrollMessageWindow}
      >
        <HistoryMessageList />
        <ActiveMessageList />
      </StyledMessageWindow>
      <MessageInput />
    </ChatContainer>
  );
};

export const changeActiveMessagesEffect = () => {
  store.dispatch(messageSlice.actions.clearHistory());
  messageWindow.scrollToBottom(messageWindow.scrollHeight);
};

const onScrollMessageWindow = () => {
  if (messageWindow.scrollTop !== 0) return;
  store.dispatch(fetchHistoryMessage(getFirstActiveMessage()));
  messageWindow.scrollToBottom(40);
};
