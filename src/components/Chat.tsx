import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import { useFireBase } from "../firebase/FireBase";

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

  return (
    <>
      <div
        style={{
          width: "80%",
          height: "70vh",
          border: "1px solid gray",
          overflowY: "auto",
        }}
      >
        {messages?.map((message, idx) => (
          <div
            key={idx}
            style={{
              margin: 10,
              border:
                user?.uid === message.uid
                  ? "2px solid green"
                  : "2px dashed red",
              marginLeft: user?.uid === message.uid ? "auto" : "10px",
              width: "fit-content",
            }}
          >
            <Grid container>
              <Avatar src={message.photoUrl} />
              <div>{message.displayName}</div>
            </Grid>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
      <Grid
        container
        direction="column"
        alignItems="flex-end"
        style={{ width: "80%" }}
      >
        <TextField
          fullWidth
          value={messageText}
          variant="outlined"
          onChange={(e) => setMessageText(e.target.value)}
        />
        <Button onClick={sendMessage} variant="outlined">
          Отправить
        </Button>
      </Grid>
    </>
  );
};
