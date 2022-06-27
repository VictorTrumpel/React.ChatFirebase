import { AppBar, Toolbar, Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFireBase } from "../firebase/FireBase";

const LoginBtn = () => {
  return (
    <Button color="inherit" variant="outlined">
      Войти
    </Button>
  );
};

const LogOutBtn = () => {
  const { auth } = useFireBase();

  return (
    <Button onClick={() => auth.signOut()} color="inherit" variant="outlined">
      Выйти
    </Button>
  );
};

export const Navbar = () => {
  const { auth } = useFireBase();
  const [user] = useAuthState(auth);

  const ActionBtn = user ? LogOutBtn : LoginBtn;

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <ActionBtn />
      </Toolbar>
    </AppBar>
  );
};
