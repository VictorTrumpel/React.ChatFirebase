import React, { useContext, useState } from "react";
import { FireContext, FireContextType } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { Container, Grid, TextField, Button } from "@mui/material";

export const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const { auth, firestore } = useContext<FireContextType>(FireContext);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    collection(firestore, "messages")
  );

  console.log(messages);

  const sendMessage = async () => {
    console.log(messageText);
  };

  return (
    <Container>
      <Grid
        container
        sx={{
          height: window.innerHeight - 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        ></div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setMessageText(e.target.value)}
          />
          <Button onClick={sendMessage} variant="outlined">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
