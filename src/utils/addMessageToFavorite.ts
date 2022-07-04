import { doc, setDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";

export const addMessageToFavorite = (message: DocumentData) => {
  const messageRef = doc(firestore, "messages", message.id);

  const data = { isFavorite: true };
  const options = { merge: true };

  setDoc(messageRef, data, options);
};
