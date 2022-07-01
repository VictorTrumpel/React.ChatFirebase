import { addDoc, serverTimestamp } from "firebase/firestore";
import { messagesCollection } from "../firebase/FireBase";
import { User } from "firebase/auth";
import uniqid from "uniqid";

export const sendMessage = async (user: User, messageText: string) => {
  const messageData = {
    id: uniqid(),
    uid: user?.uid,
    displayName: user?.displayName,
    photoUrl: user?.photoURL,
    text: messageText,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(messagesCollection, messageData);
  } catch (e) {
    console.error(e);
  }
};
