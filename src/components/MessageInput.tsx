import { Paper, IconButton, InputBase, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { sendMessage } from "../utils/sendMessage";
import { useUser } from "../hooks/useUser";
import { HandleFormSubmit } from "../utils/types";
import { useRef } from "react";
import { messageSlice } from "../store/reducers/messageSlice";

const StyledPaperInput = styled(Paper)(() => ({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(64, 68, 75)",
  marginBottom: "24px",
  borderRadius: "0",
  boxShadow: "none",
  color: "white",
}));

export const MessageInput = () => {
  const dispatch = useAppDispatch();
  const [user] = useUser();
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit: HandleFormSubmit = async (e) => {
    e.preventDefault();
    let messageText = input.current?.value;
    if (!user) return;
    if (!messageText) return;
    dispatch(messageSlice.actions.clearHistory());
    await sendMessage(user, messageText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledPaperInput>
        <InputBase
          inputRef={input}
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Написать сообщение"
        />
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px", color: "rgb(185, 187, 190)" }}
          aria-label="directions"
        >
          <SendIcon />
        </IconButton>
      </StyledPaperInput>
    </form>
  );
};
