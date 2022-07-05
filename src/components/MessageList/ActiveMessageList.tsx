import React, { useEffect, useMemo, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { chatSlice } from "../../store/reducers/chatSlice";
import { changeActiveMessagesEffect } from "../Chat/Chat";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useChat } from "../Chat/ChatContext";
import { MessageDictionary } from "../Message/MessageDictionary";

const { setLastActiveMessage } = chatSlice.actions;

export const ActiveMessageList = () => {
  const { messageQuery, messageType } = useChat();
  const firstActiveMessageIdRef = useRef("");
  const dispatch = useAppDispatch();
  const [messages] = useCollectionData(messageQuery());

  const Message = useMemo(() => MessageDictionary[messageType], []);

  useEffect(() => {
    const lastActiveMessage = messages?.[messages?.length - 1];
    const firstActiveMessage = messages?.[0]?.id;
    dispatch(setLastActiveMessage(lastActiveMessage));

    if (firstActiveMessageIdRef.current !== firstActiveMessage) {
      changeActiveMessagesEffect();
      firstActiveMessageIdRef.current = firstActiveMessage;
    }
  }, [messages]);

  return (
    <>
      {messages?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={`active-${message.id}`} message={message} />;
      })}
    </>
  );
};
