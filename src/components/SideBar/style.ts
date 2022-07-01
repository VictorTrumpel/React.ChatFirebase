import { Box, Button, styled } from "@mui/material";

export const StyledMenuContainer = styled(Box)(() => ({
  paddingTop: "20px",
  borderWidth: "4px",
  margin: "0 4px",
  flex: "1",
}));

export const StyledMenuButton = styled(Button)(() => ({
  height: "32px",
  width: "100%",
  padding: "0 20px",
  justifyContent: "flex-start",
  textTransform: "none",
  fontSize: "16px",
  borderRadius: "4px",
  color: "rgba(255, 255, 255, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,.08)",
  },
  "& small": {
    marginLeft: "16px",
  },
}));

export const SideBarContainer = styled("div")(() => ({
  minWidth: "256px",
  maxWidth: "256px",
  backgroundColor: "rgb(47, 49, 54)",
  display: "flex",
  flexDirection: "column",
  transform: "translate(-90%)",

  transitionProperty: "transform",
  transitionDuration: "1.5s",
}));

export const SideBarSection = styled(Box)(() => ({
  borderBottom: "1px",
  padding: "0 20px",
  color: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
}));
