import { Container, Grid } from "@mui/material";
import { Chat } from "../components/Chat";

export const ChatPage = () => {
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
        <Chat />
      </Grid>
    </Container>
  );
};
