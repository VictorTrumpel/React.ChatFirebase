import { useFireBase } from "../firebase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUser = () => {
  const { auth } = useFireBase();
  return useAuthState(auth);
};
