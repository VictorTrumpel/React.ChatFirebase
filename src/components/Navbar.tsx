import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { FireContext, FireContextType } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginBtn = () => {
  return (
    <Link to={LOGIN_ROUTE}>
      <Button color="inherit" variant="outlined">
        Логин
      </Button>
    </Link>
  );
};

const LogOutBtn = () => {
  const { auth } = useContext<FireContextType>(FireContext);

  return (
    <Button onClick={() => auth.signOut()} color="inherit" variant="outlined">
      Выйти
    </Button>
  );
};

export const Navbar = () => {
  const { auth } = useContext<FireContextType>(FireContext);
  const [user] = useAuthState(auth);

  const ActionBtn = user ? LogOutBtn : LoginBtn;

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container sx={{ justifyContent: "flex-end" }}>
          <ActionBtn />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
