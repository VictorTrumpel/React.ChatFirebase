import React, { FormEvent } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query } from "firebase/firestore";
import { Avatar, Box } from "@mui/material";
import { messagesCollection } from "../firebase/FireBase";
import { MessageInput } from "./MessageInput";
import { useUser } from "../hooks/useUser";
import { store } from "../store/store";
import { sendMessage } from "../utils/sendMessage";

export const Chat = () => {
  const [user] = useUser();

  const [messages] = useCollectionData(
    query(messagesCollection, orderBy("createdAt"))
  );

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageText = store.getState().messageReducer.message;
    if (!user) return;
    await sendMessage(user, messageText);
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div style={{ flex: "1", overflowY: "auto" }}>
        {messages?.map((message, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              marginBottom: "30px",
            }}
          >
            <Avatar src={message.photoUrl} />
            <div style={{ marginLeft: "17px" }}>
              <strong style={{ color: "white" }}>{message.displayName}</strong>
              <p style={{ marginTop: "5px" }}>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitForm}>
        <MessageInput />
      </form>
    </Box>
  );
};
