import { addDoc, serverTimestamp } from "firebase/firestore";
import { messagesCollection } from "../firebase/FireBase";
import { User } from "firebase/auth";
import { store } from "../store/store";

export const sendMessage = async (user: User) => {
  const messageText = store.getState().messageReducer.message;

  try {
    await addDoc(messagesCollection, {
      uid: user?.uid,
      displayName: user?.displayName,
      photoUrl: user?.photoURL,
      text: messageText,
      createdAt: serverTimestamp(),
    });
  } catch (e) {
    console.error(e);
  }
};
