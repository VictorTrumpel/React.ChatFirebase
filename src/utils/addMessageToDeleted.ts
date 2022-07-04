import { doc, setDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/FireBase";
import { User } from "firebase/auth";

export const addMessageToDeleted = async (
  user: User,
  message: DocumentData
) => {
  const messageRef = doc(firestore, "messages", message.id);

  const data = {
    deletedFor:
      message.deletedFor instanceof Array
        ? [...message.favoriteFor, user.uid]
        : [user.uid],
  };
  const options = { merge: true };

  try {
    await setDoc(messageRef, data, options);
  } catch (e) {
    console.error(e);
  }
};
