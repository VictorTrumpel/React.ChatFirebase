import { SvgIconComponent } from "@mui/icons-material";
import { StyledMenuButton, StyledMenuContainer } from "./style";
import { ReactNode } from "react";
import { PageState } from "../../store/reducers/PageSlice";
import { usePage } from "../../hooks/usePage";

type MenuButtonProps = {
  value: PageState;
  label: string;
  Icon: SvgIconComponent;
};

const MenuButton = ({ value, label, Icon }: MenuButtonProps) => {
  const [page, setPage] = usePage();

  return (
    <StyledMenuButton
      onClick={setPage.bind(null, value)}
      disableRipple
      sx={{ color: value === page ? "#039be5" : "" }}
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
