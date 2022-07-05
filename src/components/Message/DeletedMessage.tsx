import { useMessage } from "./useMessage";
import { DocumentData } from "firebase/firestore";
import React from "react";
import classNames from "classnames";
import { Avatar } from "@mui/material";
import { StyledMessageContainer } from "./style";

export const DeletedMessage = ({ message }: { message: DocumentData }) => {
  const { isDeleted, isFavorite } = useMessage(message);
  const { photoUrl, displayName, text } = message;

  if (!isDeleted) return <></>;

  return (
    <StyledMessageContainer className={classNames({ isFavorite })}>
      <Avatar src={photoUrl} />
      <div className="message_info">
        <strong>{displayName}</strong>
        <p>{text}</p>
      </div>
    </StyledMessageContainer>
  );
};
