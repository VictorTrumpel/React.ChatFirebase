import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { CircularProgress } from "@mui/material";
import { useUser } from "../hooks/useUser";
import { ChatPage } from "../pages/ChatPage";

export const AppRouter = () => {
  const [user, loading] = useUser();

  if (loading) return <CircularProgress />;
  if (!user) return <LoginPage />;
  if (!!user) return <ChatPage />;

  return <LoginPage />;
};
