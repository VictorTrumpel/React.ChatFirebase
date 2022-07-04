import { MessagePanelStyle, MessageActionStyle } from "./style";
import { DocumentData } from "firebase/firestore";
import { ReactNode } from "react";

type MessagePanelProps = {
  isOpen: boolean;
  message: DocumentData;
  children: ReactNode;
};

export const MessagePanel = ({ isOpen, children }: MessagePanelProps) => {
  if (!isOpen) return <></>;

  return (
    <MessagePanelStyle className="message-panel">{children}</MessagePanelStyle>
  );
};

type MessageActionProps = {
  onClick: () => void;
  Icon: ReactNode;
};

export const MessageAction = ({ onClick, Icon }: MessageActionProps) => {
  return (
    <MessageActionStyle disableRipple onClick={onClick}>
      {Icon}
    </MessageActionStyle>
  );
};
