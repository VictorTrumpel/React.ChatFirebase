import React from "react";
import { Avatar, styled } from "@mui/material";
import { DocumentData } from "firebase/firestore";

const StyledMessageContainer = styled("div")(() => ({
  display: "flex",
  marginBottom: "30px",
  "& .message_info": {
    marginLeft: "17px",
    "& strong": {
      color: "white",
    },
    "& p": {
      marginTop: "5px",
    },
  },
}));

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
