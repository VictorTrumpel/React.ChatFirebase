import { Button } from "@mui/material";
import { useFireBase } from "../firebase/FireBase";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogOutBtn = () => {
  const { auth } = useFireBase();

  return (
    <Button
      endIcon={<LogoutIcon />}
      onClick={() => auth.signOut()}
      sx={{ color: "gray" }}
    >
      Выйти
    </Button>
  );
};
