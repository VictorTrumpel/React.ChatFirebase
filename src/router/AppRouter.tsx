import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { Chat } from "../components/Chat";
import { CircularProgress } from "@mui/material";
import { useUser } from "../hooks/useUser";

export const AppRouter = () => {
  const [user, loading] = useUser();

  if (loading) return <CircularProgress />;
  if (!user) return <LoginPage />;
  if (!!user) return <Chat />;

  return <LoginPage />;
};
