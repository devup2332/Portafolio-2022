import { IconButton, Menu, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { MouseEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setSidebar } from "../../../store/actions/SidebarActions/SidebarActions";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { changeLanguage } from "i18next";

const HomeSidebar = () => {
  const { t, i18n } = useTranslation("index");

  const { open } = useAppSelector((state) => state.sidebar);
  const [buttonElement, setButtonElement] = useState<HTMLElement | null>(null);
  const openMenuLanguage = Boolean(buttonElement);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);
  const closeSidebar = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    if (!navRef.current?.contains(e.target as Node)) {
      dispatch(setSidebar(false));
    }
  };

  const handleCloseMenuLanguage = (lang: string) => {
    changeLanguage(lang);
    setButtonElement(null);
  };
  return (
    <div
      className="fixed top-0 left-0 w-full bg-black-opacity h-screen z-10 shadow-md transition-all"
      style={{
        opacity: open ? "1" : "0",
        transform: open ? "translatex(0)" : "translateX(-100%)",
      }}
      onClick={closeSidebar}
    >
      <div className="w-9/12 bg-white shadow-md h-full max-w-xs" ref={navRef}>
        <nav className="p-7 grid gap-5 h-fit">
          <div className="flex items-center justify-between">
            <h1 className="font-extrabold">{t("home.sidebar.title")}</h1>
            <IconButton
              aria-label="Close"
              onClick={() => dispatch(setSidebar(false))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <ul>
            <li className="py-2">{t("home.sidebar.options.tutorials")}</li>
            <li className="py-2">{t("home.sidebar.options.projects")}</li>
            <li className="py-2">{t("home.sidebar.options.contact")}</li>
          </ul>
        </nav>
        <div>
          <CustomButton
            variant="text"
            id="languageButton"
            aria-haspopup="true"
            onClick={(e: any) => {
              setButtonElement(e.currentTarget);
            }}
          >
            {<span>{i18n.language}</span>}
          </CustomButton>
          <Menu
            open={openMenuLanguage}
            id="languageMenu"
            anchorEl={buttonElement}
            onClose={() => setButtonElement(null)}
            MenuListProps={{
              "aria-labelledby": "languageButton",
            }}
          >
            <MenuItem onClick={() => handleCloseMenuLanguage("en")}>
              en
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenuLanguage("es")}>
              es
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
