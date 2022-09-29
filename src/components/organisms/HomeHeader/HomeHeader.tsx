import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { setSidebar } from "../../../store/actions/SidebarActions/SidebarActions";
import { useAppDispatch } from "../../../store";

const HomeHeader = () => {
  const { t } = useTranslation("index");
  const dispatch = useAppDispatch();
  const openSidebar = () => {
    dispatch(setSidebar(true));
  };
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-transparent text-white flex justify-between px-5 py-3 items-center">
      <h1 className="font-extrabold">{t("home.header.title")}</h1>
      <nav className="hidden">
        <ul>
          <li>{t("home.header.options.tutorials")}</li>
          <li>{t("home.header.options.projects")}</li>
          <li>{t("home.header.options.contact")}</li>
        </ul>
      </nav>
      <IconButton aria-label="Menu" onClick={openSidebar}>
        <MenuIcon className="text-white" />
      </IconButton>
    </div>
  );
};

export default HomeHeader;
