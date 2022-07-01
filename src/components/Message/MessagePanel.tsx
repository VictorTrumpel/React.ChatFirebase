import StarIcon from "@mui/icons-material/Star";
import { MessagePanelStyle, MessageActionStyle } from "./style";
import { addMessageToFavorite } from "../../utils/addMessageToFavorite";
import { DocumentData } from "firebase/firestore";

type MessagePanelProps = {
  isOpen: boolean;
  message: DocumentData;
};

export const MessagePanel = ({ message, isOpen }: MessagePanelProps) => {
  if (!isOpen) return <></>;

  const addFavorites = () => {
    console.log(message);
    addMessageToFavorite(message);
  };

  return (
    <MessagePanelStyle className="message-panel">
      <MessageAction onClick={addFavorites} />
    </MessagePanelStyle>
  );
};

type MessageActionProps = {
  onClick: () => void;
};

const MessageAction = ({ onClick }: MessageActionProps) => {
  return (
    <MessageActionStyle disableRipple onClick={onClick}>
      <StarIcon />
    </MessageActionStyle>
  );
};
