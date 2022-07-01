import { styled } from "@mui/material";

export const StyledMessageContainer = styled("div")(() => ({
  display: "flex",
  marginBottom: "30px",
  paddingLeft: "24px",
  marginRight: "4px",
  paddingTop: "4px",
  paddingBottom: "4px",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  "& .message_info": {
    marginLeft: "17px",
    "& strong": {
      color: "white",
    },
    "& p": {
      marginTop: "5px",
    },
  },
  "&:hover": {
    backgroundColor: "rgb(74, 75, 78)",
  },
}));
