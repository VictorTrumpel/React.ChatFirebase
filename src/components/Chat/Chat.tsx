import React, { useRef, useLayoutEffect, ReactNode } from "react";
import { MessageInput } from "../MessageInput/MessageInput";
import { StyledMessageWindow } from "../MessageList/style";
import { chatSlice } from "../../store/reducers/chatSlice";
import { MessageWindowDOM } from "./MessageWindowDOM";
import { ChatContainer } from "./style";
import { store } from "../../store/store";
import { loadHistoryMessageList } from "../../store/thunks/loadHistoryMessageList";
import { ChatContext, ChatContextType } from "./ChatContext";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

type ChatProps = {
  children: ReactNode;
  writable?: boolean;
} & ChatContextType;

const messageWindow = new MessageWindowDOM();

export const Chat = ({
  children,
  writable = true,
  messageType = "Common",
  historyQuery,
  messageQuery,
}: ChatProps) => {
  const dispatch = useAppDispatch();
  const { chatHistoryIsLoading } = useAppSelector((store) => store.chatReducer);
  const messageWindowRef = useRef<HTMLDivElement>(null);

  const onScrollMessageWindow = () => {
    if (messageWindow.scrollTop !== 0) return;
    if (chatHistoryIsLoading) return;
    dispatch(loadHistoryMessageList(historyQuery));
    messageWindow.scrollToBottom(40);
  };

  useLayoutEffect(() => {
    messageWindow.ref = messageWindowRef.current;
  }, []);

  return (
    <ChatContext.Provider value={{ historyQuery, messageQuery, messageType }}>
      <ChatContainer>
        <StyledMessageWindow
          ref={messageWindowRef}
          onScroll={onScrollMessageWindow}
        >
          {children}
        </StyledMessageWindow>

        {writable && <MessageInput />}
      </ChatContainer>
    </ChatContext.Provider>
  );
};

export const changeActiveMessagesEffect = () => {
  store.dispatch(chatSlice.actions.clearHistory());
  messageWindow.scrollToBottom(messageWindow.scrollHeight);
};
