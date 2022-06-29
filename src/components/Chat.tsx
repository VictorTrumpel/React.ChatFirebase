import React, { FormEvent } from "react";
import { Box } from "@mui/material";
import { MessageInput } from "./MessageInput";
import { useUser } from "../hooks/useUser";
import { store } from "../store/store";
import { sendMessage } from "../utils/sendMessage";
import { MessagesWindow } from "./MessagesWindow";

export const Chat = () => {
  const [user] = useUser();

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
      <MessagesWindow />
      <form onSubmit={handleSubmitForm}>
        <MessageInput />
      </form>
    </Box>
  );
};
