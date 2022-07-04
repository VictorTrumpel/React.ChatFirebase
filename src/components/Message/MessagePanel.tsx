import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

import { MessagePanelStyle, MessageActionStyle } from "./style";
import { addMessageToFavorite } from "../../utils/addMessageToFavorite";
import { DocumentData } from "firebase/firestore";
import { ReactNode } from "react";
import { addMessageToDeleted } from "../../utils/addMessageToDeleted";

type MessagePanelProps = {
  isOpen: boolean;
  message: DocumentData;
};

export const MessagePanel = ({ message, isOpen }: MessagePanelProps) => {
  if (!isOpen) return <></>;

  return (
    <MessagePanelStyle className="message-panel">
      <MessageAction
        onClick={addMessageToFavorite.bind(null, message)}
        Icon={<StarIcon />}
      />
      <MessageAction
        onClick={addMessageToDeleted.bind(null, message)}
        Icon={<DeleteIcon />}
      />
    </MessagePanelStyle>
  );
};

type MessageActionProps = {
  onClick: () => void;
  Icon: ReactNode;
};

const MessageAction = ({ onClick, Icon }: MessageActionProps) => {
  return (
    <MessageActionStyle disableRipple onClick={onClick}>
      {Icon}
    </MessageActionStyle>
  );
};
