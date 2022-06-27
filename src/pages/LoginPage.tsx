import { Container, Grid } from "@mui/material";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
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
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};
