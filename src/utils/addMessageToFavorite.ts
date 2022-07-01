import { doc, updateDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { messagesCollection } from "../firebase/FireBase";

export const addMessageToFavorite = async (message: DocumentData) => {
  const messageRef = doc(messagesCollection);

  updateDoc(messageRef, {
    text: "fake",
  }).then(() => console.log("Document updated"));
};
