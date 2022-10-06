import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../store/store";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { useState } from "react";
import { changeLanguage } from "i18next";
import { headerLinks } from "../../../lib/utils/HeaderLinks";
import { languageOptions } from "../../../lib/utils/LanguageOptions";
import { setSidebarAction } from "../../../store/actions/AppComponentsActions/setSidebarAction";
import Link from "next/link";

const HomeHeader = () => {
  const { t, i18n } = useTranslation("index");
  const [buttonElement, setButtonElement] = useState<HTMLElement | null>(null);
  const openMenuLanguage = Boolean(buttonElement);
  const dispatch = useAppDispatch();
  const openSidebar = () => {
    dispatch(setSidebarAction(true));
  };
  return (
    <div className="fixed flex w-screen top-0 left-0 z-10 py-3 lg:py-7 text-white bg-primary opacity-0 animation-fade">
      <div className="flex justify-between items-center w-10/12 max-w-md m-auto lg:max-w-8xl">
        <h1 className="font-extrabold text-lg lg:hidden">
          {t("home.header.title")}
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex gap-12 text-sm cursor-pointer list-none">
            <li className="transition-all hover:text-accent">
              <Link href="/">
                <a className="no-underline text-white">
                  {t("home.header.options.home")}
                </a>
              </Link>
            </li>
            <li className="transition-all hover:text-accent">
              <Link href="/turorials">
                <a className="no-underline text-white">
                  {t("home.header.options.tutorials")}
                </a>
              </Link>
            </li>
            <li className="transition-all hover:text-accent">
              <Link href="/projects">
                <a className="no-underline text-white">
                  {t("home.header.options.projects")}
                </a>
              </Link>
            </li>
            <li className="transition-all hover:text-accent">
              <Link href="/contact">
                <a className="no-underline text-white">
                  {t("home.header.options.contact")}
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex lg:justify-between lg:gap-20">
          <CustomButton
            variant="text"
            onClick={(e: any) => {
              setButtonElement(e.currentTarget);
            }}
          >
            {languageOptions.map(({ Icon, label, id }, index) => {
              const selected = id === i18n.language;
              if (selected)
                return (
                  <div
                    className="text-white flex gap-3 items-center"
                    key={index}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </div>
                );
            })}
          </CustomButton>
          <Menu
            open={openMenuLanguage}
            anchorEl={buttonElement}
            onClose={() => setButtonElement(null)}
          >
            {languageOptions.map(({ Icon, label, id }, index) => {
              return (
                <MenuItem
                  key={index}
                  onClick={() => {
                    changeLanguage(id);
                    setButtonElement(null);
                  }}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText>{label}</ListItemText>
                </MenuItem>
              );
            })}
          </Menu>
          <div className="flex gap-1">
            {headerLinks.map(({ Icon, label, onClick }, index) => {
              return (
                <Tooltip key={index} title={label}>
                  <IconButton onClick={() => onClick(t)}>
                    <Icon className="text-white fill-current w-5 h-5" />
                  </IconButton>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <IconButton
          aria-label="Menu"
          onClick={openSidebar}
          className="lg:hidden"
        >
          <MenuIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeHeader;
