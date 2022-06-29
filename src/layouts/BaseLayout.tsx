import React, { ReactNode } from "react";
import { SideBar } from "../components/SideBar";
import { Box } from "@mui/material";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box display="flex" height="100%">
      <SideBar />
      {children}
    </Box>
  );
};
