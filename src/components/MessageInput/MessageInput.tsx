import { IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { sendMessage } from "../../utils/sendMessage";
import { useUser } from "../../hooks/useUser";
import { HandleFormSubmit } from "../../utils/types";
import { useLayoutEffect, useRef } from "react";
import { iconButtonCss, inputBaseCss, StyledPaperInput } from "./style";
import { InputDOM } from "./InputDOM";
import { User } from "firebase/auth";

const input = new InputDOM();

export const MessageInput = () => {
  const [user] = useUser();
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    input.ref = inputRef.current;
  }, []);

  return (
    <form onSubmit={onSubmit.bind({ user })}>
      <StyledPaperInput>
        <InputBase
          inputRef={inputRef}
          sx={inputBaseCss}
          placeholder="Написать сообщение"
        />
        <IconButton
          type="submit"
          color="primary"
          sx={iconButtonCss}
          aria-label="directions"
        >
          <SendIcon />
        </IconButton>
      </StyledPaperInput>
    </form>
  );
};

const onSubmit: HandleFormSubmit = async function (
  this: { user?: User | null },
  e
) {
  e.preventDefault();
  const messageText = input.value;
  input.value = "";

  if (!this.user) return;
  if (!messageText) return;

  await sendMessage(this.user, messageText);
};
