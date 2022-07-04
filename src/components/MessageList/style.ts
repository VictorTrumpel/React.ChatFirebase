import { styled } from "@mui/material";

export const StyledMessageWindow = styled("div")(() => ({
  flex: "1",

  display: "flex",
  // flexDirection: "column",

  flexWrap: "wrap",

  overflowY: "auto",
  paddingTop: "40px",
  // justifyContent: "end",
  "& .history-messages": {
    minWidth: "100%",
    // height: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  "& .active-messages": {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    // height: 0,
  },
}));
