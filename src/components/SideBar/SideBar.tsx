import { SideBarMenu } from "./SideBarMenu";
import { SideBarContainer, SideBarSection } from "./style";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SendIcon from "@mui/icons-material/Send";
import { LogOutBtn } from "../LogOutBtn";
import { useRef, useEffect } from "react";

export const SideBar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0%)";
    }
  }, []);

  return (
    <SideBarContainer ref={ref}>
      <SideBarSection height="46px" display="flex" alignItems="center">
        <h1 style={{ fontWeight: "normal" }}>TrueChat</h1>
      </SideBarSection>

      <SideBarMenu.Container>
        <SideBarMenu.Item value="/message" label="Мессенджер" Icon={SendIcon} />
        <SideBarMenu.Item value="/favorite" label="Избранное" Icon={StarIcon} />
        <SideBarMenu.Item
          value="/deleted"
          label="Удаленное"
          Icon={DeleteIcon}
        />
        <SideBarMenu.Item
          value="/members"
          label="Участники"
          Icon={PeopleAltIcon}
        />
      </SideBarMenu.Container>

      <LogOutBtn />
    </SideBarContainer>
  );
};
