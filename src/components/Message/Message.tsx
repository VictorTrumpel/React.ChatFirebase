import React from "react";
import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { StyledMessageContainer } from "./style";
import { MessageAction, MessagePanel } from "./MessagePanel";
import { useState } from "react";
import classNames from "classnames";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMessage } from "./useMessage";

export const Message = ({ message }: { message: DocumentData }) => {
  const { isDeleted, isFavorite, addFavorite, addDelete } = useMessage(message);

  const [isFocus, setFocus] = useState(false);
  const { photoUrl, displayName, text } = message;

  if (isDeleted) return <></>;

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
      <MessagePanel message={message} isOpen={isFocus}>
        <MessageAction onClick={addFavorite} Icon={<StarIcon />} />
        <MessageAction onClick={addDelete} Icon={<DeleteIcon />} />
      </MessagePanel>
    </StyledMessageContainer>
  );
};
