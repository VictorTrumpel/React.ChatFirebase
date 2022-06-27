import { createContext, ReactNode, useContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

export type FireContextType = {
  firebase: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

export const FireBaseContext = createContext<FireContextType | any>(null);

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

type FireBaseProps = {
  children: ReactNode;
};

export const FireBase = ({ children }: FireBaseProps) => {
  return (
    <FireBaseContext.Provider value={{ firebase, auth, firestore }}>
      {children}
    </FireBaseContext.Provider>
  );
};

export const useFireBase = (): FireContextType => {
  const context = useContext<FireContextType>(FireBaseContext);

  if (!context)
    throw new Error("useFireBase() must be used with in FireBase context");

  return context;
};
