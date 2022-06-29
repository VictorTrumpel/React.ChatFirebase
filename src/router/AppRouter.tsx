import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { CircularProgress, styled, Box } from "@mui/material";
import { useUser } from "../hooks/useUser";
import { ChatPage } from "../pages/ChatPage";
import { FavoritePage } from "../pages/FavoritePage";
import { DeletedPage } from "../pages/DeletedPage";
import { MembersPage } from "../pages/MembersPage";
import { useUrl } from "../hooks/useUrl";
import { NotFoundPage } from "../pages/NotFoundPage";

const StyledPageContainer = styled(Box)(() => ({
  paddingLeft: "24px",
  paddingRight: "24px",
  overflow: "hidden",
  backgroundColor: "rgb(54, 57, 63)",
  color: "rgb(188, 188, 191)",
  margin: "0",
  width: "100%",
}));

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

  return (
    <StyledPageContainer>
      <Page />
    </StyledPageContainer>
  );
};
