import { SvgIconComponent } from "@mui/icons-material";
import { StyledMenuButton, StyledMenuContainer } from "./style";
import { ReactNode } from "react";

type MenuButtonProps = {
  value: string;
  label: string;
  Icon: SvgIconComponent;
};

const MenuButton = ({ label, Icon }: MenuButtonProps) => {
  return (
    <StyledMenuButton disableRipple>
      <Icon sx={{ width: "20px", height: "20px" }} />
      <small>{label}</small>
    </StyledMenuButton>
  );
};

type SideBarMenuProps = {
  children: ReactNode;
};

const SideBarMenuContainer = ({ children }: SideBarMenuProps) => {
  return <StyledMenuContainer>{children}</StyledMenuContainer>;
};

export const SideBarMenu = {
  Container: SideBarMenuContainer,
  Item: MenuButton,
};
