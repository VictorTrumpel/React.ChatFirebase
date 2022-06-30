import React, { useRef, useLayoutEffect } from "react";
import { MessageInput } from "../MessageInput";
import { ActiveMessagesWindow } from "../MessagesWindow/ActiveMessagesWindow";
import { HistoryMessagesWindow } from "../MessagesWindow/HistoryMessagesWindow";
import { StyledMessageWindow } from "../MessagesWindow/style";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  fetchHistoryMessage,
  messageSlice,
} from "../../store/reducers/messageSlice";
import { getFirstActiveMessage } from "../../store/getters";
import { ChatWindowDOM } from "./ChatWindowDOM";
import { ChatContainer } from "./style";

const chatWindow = new ChatWindowDOM();

export const Chat = () => {
  const dispatch = useAppDispatch();
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (chatWindow.scrollTop === 0) {
      dispatch(fetchHistoryMessage(getFirstActiveMessage()));
      chatWindow.scrollToBottom(40);
    }
  };

  const onChange = () => {
    dispatch(messageSlice.actions.clearHistory());
    chatWindow.scrollToBottom(chatWindow.scrollHeight);
  };

  useLayoutEffect(() => {
    chatWindow.ref = chatWindowRef.current;
  }, []);

  return (
    <ChatContainer>
      <StyledMessageWindow ref={chatWindowRef} onScroll={onScroll}>
        <HistoryMessagesWindow />
        <ActiveMessagesWindow onChange={onChange} />
      </StyledMessageWindow>
      <MessageInput onSendMessage={onChange} />
    </ChatContainer>
  );
};
