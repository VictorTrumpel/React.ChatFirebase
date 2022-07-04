import React from "react";
import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { StyledMessageContainer } from "./style";
import { MessagePanel } from "./MessagePanel";
import { useState } from "react";
import classNames from "classnames";

export const Message = ({ message }: { message: DocumentData }) => {
  const [isFocus, setFocus] = useState(false);
  const { photoUrl, displayName, text, isFavorite } = message;

  return (
    <StyledMessageContainer
      className={classNames({ isFavorite })}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Avatar src={photoUrl} />
      <div className="message_info">
        <strong>{displayName}</strong>
        <p>{text}</p>
      </div>
      <MessagePanel message={message} isOpen={isFocus} />
    </StyledMessageContainer>
  );
};
