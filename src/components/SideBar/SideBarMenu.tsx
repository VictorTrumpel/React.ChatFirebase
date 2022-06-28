import { SvgIconComponent } from "@mui/icons-material";
import { StyledMenuButton, StyledMenuContainer } from "./style";
import { ReactNode } from "react";
import { useUrl } from "../../hooks/useUrl";

type MenuButtonProps = {
  value: string;
  label: string;
  Icon: SvgIconComponent;
};

const MenuButton = ({ value, label, Icon }: MenuButtonProps) => {
  const [page, setPage] = useUrl();

  return (
    <StyledMenuButton
      onClick={setPage.bind(null, value)}
      disableRipple
      sx={{ color: value === page ? "white" : "" }}
    >
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
