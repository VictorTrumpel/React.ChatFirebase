import React from "react";
import { Avatar } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { StyledMessageContainer } from "./style";
import { MessageAction, MessagePanel } from "./MessagePanel";
import { useState } from "react";
import classNames from "classnames";
import { addMessageToFavorite } from "../../utils/addMessageToFavorite";
import StarIcon from "@mui/icons-material/Star";
import { addMessageToDeleted } from "../../utils/addMessageToDeleted";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../hooks/useUser";
import { User } from "firebase/auth";

const isMessageBelong = (
  user?: User | null,
  message?: DocumentData,
  field?: "favoriteFor" | "deletedFor"
): boolean => {
  if (!user) return false;
  if (!message?.[field || ""]) return false;
  return !!~message[field || ""]?.indexOf(user.uid);
};

export const Message = ({ message }: { message: DocumentData }) => {
  const [user] = useUser();
  const [isDeleted, setIsDeleted] = useState(
    isMessageBelong(user, message, "deletedFor")
  );
  const [isFavorite, setIsFavorite] = useState(
    isMessageBelong(user, message, "favoriteFor")
  );

  const [isFocus, setFocus] = useState(false);
  const { photoUrl, displayName, text } = message;

  if (isDeleted) return <></>;

  const addFavorite = () => {
    if (!user) return;
    setIsFavorite(true);
    addMessageToFavorite(user, message);
  };

  const addDelete = () => {
    if (!user) return;
    setIsDeleted(true);
    addMessageToDeleted(user, message);
  };

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
