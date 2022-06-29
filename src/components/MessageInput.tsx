import { Paper, IconButton, InputBase, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { messageSlice } from "../store/reducers/messageSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { sendMessage } from "../utils/sendMessage";
import { useUser } from "../hooks/useUser";
import { HandleFormSubmit, HandleInputChange } from "../utils/types";

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
  const { changeMessage } = messageSlice.actions;

  const handleSubmit: HandleFormSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    await sendMessage(user);
  };

  const handleChange: HandleInputChange = (e) => {
    dispatch(changeMessage(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledPaperInput>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Написать сообщение"
          onChange={handleChange}
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
