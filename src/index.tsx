import React from "react";
import { createContext } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

export type FireContextType = {
  firebase: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

export const FireContext = createContext<FireContextType | any>(null);

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FireContext.Provider value={{ firebase, auth, firestore }}>
        <App />
      </FireContext.Provider>
    </Provider>
  </React.StrictMode>
);
