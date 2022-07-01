import React from "react";
import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { StyledMessageContainer } from "./style";
import { MessagePanel } from "./MessagePanel";
import { useState } from "react";

export const Message = ({ message }: { message: DocumentData }) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <StyledMessageContainer
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Avatar src={message.photoUrl} />
      <div className="message_info">
        <strong>{message.displayName}</strong>
        <p>{message.text}</p>
      </div>
      <MessagePanel message={message} isOpen={isFocus} />
    </StyledMessageContainer>
  );
};
