import { styled } from "@mui/material";

export const StyledMessageWindow = styled("div")(() => ({
  flex: "1",
  overflowY: "auto",
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap",
  "& .history-messages": {
    minWidth: "100%",
  },
  "& .active-messages": {
    minWidth: "100%",
  },
}));
