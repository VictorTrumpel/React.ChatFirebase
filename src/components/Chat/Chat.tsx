import React, { useRef, useLayoutEffect, ReactNode } from "react";
import { MessageInput } from "../MessageInput/MessageInput";
import { StyledMessageWindow } from "../MessageList/style";
import { chatSlice } from "../../store/reducers/chatSlice";
import { MessageWindowDOM } from "./MessageWindowDOM";
import { ChatContainer } from "./style";
import { store } from "../../store/store";
import { loadHistoryMessageList } from "../../store/thunks/loadHistoryMessageList";

const messageWindow = new MessageWindowDOM();

type ChatProps = {
  children: ReactNode;
  writable?: boolean;
};

export const Chat = ({ children, writable = true }: ChatProps) => {
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
        {children}
      </StyledMessageWindow>
      {writable && <MessageInput />}
    </ChatContainer>
  );
};

export const changeActiveMessagesEffect = () => {
  store.dispatch(chatSlice.actions.clearHistory());
  messageWindow.scrollToBottom(messageWindow.scrollHeight);
};

const onScrollMessageWindow = () => {
  if (messageWindow.scrollTop !== 0) return;
  if (store.getState().chatReducer.chatHistoryIsLoading) return;
  store.dispatch(loadHistoryMessageList());
  messageWindow.scrollToBottom(40);
};
