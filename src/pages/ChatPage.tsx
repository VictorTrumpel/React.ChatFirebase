import { Container, Grid } from "@mui/material";
import { Chat } from "../components/Chat";

export const ChatPage = () => {
  return (
    <Container>
      <Grid container>
        <Chat />
      </Grid>
    </Container>
  );
};
