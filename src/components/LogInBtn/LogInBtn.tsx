import "./style.css";
import { useFireBase } from "../../firebase/FireBase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const LogInBtn = () => {
  const firebase = useFireBase();

  const login = async () => {
    await signInWithPopup(firebase.auth, new GoogleAuthProvider());
  };

  return (
    <button onClick={login} className="button-49 log-in-btn">
      Войти
    </button>
  );
};
