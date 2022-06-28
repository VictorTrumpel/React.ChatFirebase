import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { CircularProgress } from "@mui/material";
import { useUser } from "../hooks/useUser";
import { ChatPage } from "../pages/ChatPage";
import { FavoritePage } from "../pages/FavoritePage";
import { DeletedPage } from "../pages/DeletedPage";
import { MembersPage } from "../pages/MembersPage";
import { useUrl } from "../hooks/useUrl";
import { NotFoundPage } from "../pages/NotFoundPage";

const Router: { [url: string]: () => JSX.Element } = {
  "/message": ChatPage,
  "/favorite": FavoritePage,
  "/deleted": DeletedPage,
  "/members": MembersPage,
};

export const AppRouter = () => {
  const [page] = useUrl();
  const [user, loading] = useUser();

  if (loading) return <CircularProgress />;
  if (!user) return <LoginPage />;

  const Page = Router[page] || NotFoundPage;

  return <Page />;
};
