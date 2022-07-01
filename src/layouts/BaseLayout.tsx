import React, { ReactNode } from "react";
import { SideBar } from "../components/SideBar";
import { Box, styled } from "@mui/material";
import { useUser } from "../hooks/useUser";

type BaseLayoutProps = {
  children: ReactNode;
};

export const PageContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
}));

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [user] = useUser();

  return (
    <Box display="flex" height="100%">
      {user && <SideBar />}
      <PageContainer>{children}</PageContainer>
    </Box>
  );
};
