import { doc, setDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";

export const addMessageToFavorite = async (message: DocumentData) => {
  const messageRef = doc(firestore, "messages", message.id);

  setDoc(messageRef, {
    text: "fake",
  }).then(() => console.log("Document updated"));
};
