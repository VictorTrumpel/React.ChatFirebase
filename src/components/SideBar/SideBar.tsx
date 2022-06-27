import { SideBarMenu } from "./SideBarMenu";
import { SideBarContainer, SideBarSection } from "./style";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SendIcon from "@mui/icons-material/Send";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarSection height="46px" display="flex" alignItems="center">
        <h1 style={{ fontWeight: "normal" }}>TrueChat</h1>
      </SideBarSection>

      <SideBarMenu.Container>
        <SideBarMenu.Item value="message" label="Мессенджер" Icon={SendIcon} />
        <SideBarMenu.Item value="favorite" label="Избранное" Icon={StarIcon} />
        <SideBarMenu.Item value="deleted" label="Удаленное" Icon={DeleteIcon} />
        <SideBarMenu.Item
          value="members"
          label="Участники"
          Icon={PeopleAltIcon}
        />
      </SideBarMenu.Container>
    </SideBarContainer>
  );
};
