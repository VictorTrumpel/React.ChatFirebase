import React, { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query, limit, DocumentData } from "firebase/firestore";
import { messagesCollection } from "../../firebase/FireBase";
import { Message } from "../Message";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { messageSlice } from "../../store/reducers/messageSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

const LIMIT_ACTIVE_MESSAGES = 10;

const messageQuery = query(
  messagesCollection,
  orderBy("createdAt", "desc"),
  limit(LIMIT_ACTIVE_MESSAGES)
);

function DispatchMessage(
  this: { dispatch: ThunkDispatch<any, any, any> },
  messageType: "firstActiveMessage" | "lastMessage",
  messageData?: DocumentData
) {
  const { setMessageData } = messageSlice.actions;

  this.dispatch(
    setMessageData({
      messageType,
      messageData,
    })
  );
}

export const ActiveMessagesWindow = () => {
  const dispatch = useAppDispatch();
  const dispatchMessage = DispatchMessage.bind({ dispatch });

  const [messages] = useCollectionData(messageQuery);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatchMessage("lastMessage", messages?.[0]);
    dispatchMessage("firstActiveMessage", messages?.[messages?.length - 1]);

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
