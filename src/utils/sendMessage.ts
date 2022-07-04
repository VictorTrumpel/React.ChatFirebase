import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";
import { User } from "firebase/auth";
import uniqid from "uniqid";

export const sendMessage = async (user: User, messageText: string) => {
  const messageData = {
    id: uniqid.process(),
    uid: user?.uid,
    displayName: user?.displayName,
    photoUrl: user?.photoURL,
    text: messageText,
    createdAt: serverTimestamp(),
  };

  try {
    await setDoc(doc(firestore, "messages", messageData.id), messageData);
  } catch (e) {
    console.error(e);
  }
};
