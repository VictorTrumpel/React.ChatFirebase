import React from "react";
import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { StyledMessageContainer } from "./style";

export const Message = ({ message }: { message: DocumentData }) => {
  return (
    <StyledMessageContainer>
      <Avatar src={message.photoUrl} />
      <div className="message_info">
        <strong>{message.displayName}</strong>
        <p>{message.text}</p>
      </div>
    </StyledMessageContainer>
  );
};
