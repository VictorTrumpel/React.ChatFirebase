import { styled, IconButton } from "@mui/material";

export const StyledMessageContainer = styled("div")(() => ({
  position: "relative",
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

export const MessagePanelStyle = styled("div")(() => ({
  position: "absolute",
  right: "12px",
  top: "-16px",
  height: "32px",
  border: "1px solid rgb(50, 53, 59)",
  backgroundColor: "rgb(63, 67, 74)",
  display: "flex",
  alignItems: "center",
}));

export const MessageActionStyle = styled(IconButton)(() => ({
  borderRadius: "0",
  padding: "0",
  height: "100%",
  width: "30px",
  color: "rgb(185, 187, 190)",
  "&:hover": {
    backgroundColor: "rgb(84, 88, 97)",
  },
}));
