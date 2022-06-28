import React, { FormEvent, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { Avatar, Box } from "@mui/material";
import { useFireBase } from "../firebase/FireBase";
import { MessageInput } from "./MessageInput";

export const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const { auth, firestore } = useFireBase();
  const [user] = useAuthState(auth);
  const [messages] = useCollectionData(
    query(collection(firestore, "messages"), orderBy("createdAt"))
  );

  const sendMessage = async () => {
    try {
      await addDoc(collection(firestore, "messages"), {
        uid: user?.uid,
        displayName: user?.displayName,
        photoUrl: user?.photoURL,
        text: messageText,
        createdAt: serverTimestamp(),
      });
      setMessageText("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
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
      <form action="">
        <MessageInput />
      </form>
    </Box>
  );
};
