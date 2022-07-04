import React, { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query, limit } from "firebase/firestore";
import { messagesCollection } from "../../firebase/FireBase";
import { Message } from "../Message/Message";
import { chatSlice } from "../../store/reducers/chatSlice";
import { changeActiveMessagesEffect } from "../Chat/Chat";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const LIMIT_ACTIVE_MESSAGES = 20;

const { setLastActiveMessage } = chatSlice.actions;

let FIRST_ACTIVE_MESSAGE_ID_CACHE = "";

export const ActiveMessageList = () => {
  const dispatch = useAppDispatch();
  const [messages] = useCollectionData(messageQuery(LIMIT_ACTIVE_MESSAGES));

  useEffect(() => {
    const lastActiveMessage = messages?.[messages?.length - 1];
    const firstActiveMessage = messages?.[0]?.id;
    dispatch(setLastActiveMessage(lastActiveMessage));

    if (FIRST_ACTIVE_MESSAGE_ID_CACHE !== firstActiveMessage) {
      changeActiveMessagesEffect();
      FIRST_ACTIVE_MESSAGE_ID_CACHE = firstActiveMessage;
    }
  }, [messages]);

  return (
    <div className="active-messages">
      {messages?.map((_, idx, messages) => {
        const message = messages[messages.length - (idx + 1)];

        return <Message key={`active-${message.id}`} message={message} />;
      })}
    </div>
  );
};

const messageQuery = (activeMessages: number) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    limit(activeMessages)
  );
