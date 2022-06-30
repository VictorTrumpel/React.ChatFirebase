import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query, limit, DocumentData } from "firebase/firestore";
import { messagesCollection } from "../../firebase/FireBase";
import { Message } from "../Message";
import { messageSlice } from "../../store/reducers/messageSlice";
import { changeActiveMessagesEffect } from "../Chat/Chat";
import { store } from "../../store/store";

const LIMIT_ACTIVE_MESSAGES = 20;

export const ActiveMessageList = () => {
  const [messages] = useCollectionData(messageQuery);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatchMessage("lastMessage", messages?.[0]);
    dispatchMessage("firstActiveMessage", messages?.[messages?.length - 1]);
    changeActiveMessagesEffect();
  }, [messages]);

  return (
    <div className="active-messages">
      {messages?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={idx} message={message} />;
      })}
      <div ref={bottomRef} />
    </div>
  );
};

const messageQuery = query(
  messagesCollection,
  orderBy("createdAt", "desc"),
  limit(LIMIT_ACTIVE_MESSAGES)
);

function dispatchMessage(
  messageType: "firstActiveMessage" | "lastMessage",
  messageData?: DocumentData
) {
  const { setMessageData } = messageSlice.actions;

  store.dispatch(
    setMessageData({
      messageType,
      messageData,
    })
  );
}
