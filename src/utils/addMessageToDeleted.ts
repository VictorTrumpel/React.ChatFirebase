import { doc, setDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";

export const addMessageToDeleted = (message: DocumentData) => {
  const messageRef = doc(firestore, "messages", message.id);

  const data = { isDeleted: true };
  const options = { merge: true };

  setDoc(messageRef, data, options);
};
