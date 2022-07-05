import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { addMessageToFavorite } from "../../utils/addMessageToFavorite";
import { addMessageToDeleted } from "../../utils/addMessageToDeleted";

const isMessageBelong = (
  user?: User | null,
  message?: DocumentData,
  field?: "favoriteFor" | "deletedFor"
): boolean => {
  if (!user) return false;
  if (!message?.[field || ""]) return false;
  return !!~message[field || ""]?.indexOf(user.uid);
};

export const useMessage = (message: DocumentData) => {
  const [user] = useUser();
  const [isDeleted, setIsDeleted] = useState(
    isMessageBelong(user, message, "deletedFor")
  );
  const [isFavorite, setIsFavorite] = useState(
    isMessageBelong(user, message, "favoriteFor")
  );

  const addFavorite = () => {
    if (!user) return;
    setIsFavorite(true);
    addMessageToFavorite(user, message);
  };

  const addDelete = () => {
    if (!user) return;
    setIsDeleted(true);
    addMessageToDeleted(user, message);
  };

  return { isDeleted, isFavorite, addFavorite, addDelete };
};
