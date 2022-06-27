import { Container, Grid } from "@mui/material";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid container>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};
