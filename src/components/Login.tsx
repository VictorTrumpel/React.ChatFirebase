import { Container, Grid, Box, Button } from "@mui/material";
import { useContext } from "react";
import { FireContext, FireContextType } from "../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Login = () => {
  const firebase = useContext<FireContextType>(FireContext);

  const login = async () => {
    const { user } = await signInWithPopup(
      firebase.auth,
      new GoogleAuthProvider()
    );
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
        <Grid
          container
          sx={{
            width: 400,
            background: "lightgray",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
