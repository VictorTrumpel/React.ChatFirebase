import { Box, Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useFireBase } from "../firebase/FireBase";

export const LoginForm = () => {
  const firebase = useFireBase();

  const login = async () => {
    await signInWithPopup(firebase.auth, new GoogleAuthProvider());
  };

  return (
    <Box p={5}>
      <Button onClick={login} variant="outlined">
        Войти с помощью Google
      </Button>
    </Box>
  );
};
