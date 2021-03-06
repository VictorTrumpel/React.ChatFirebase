import { styled } from "@mui/material";

export const ChatContainer = styled("section")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& form": {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
}));
