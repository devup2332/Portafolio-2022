import {
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { MouseEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { changeLanguage } from "i18next";
import { languageOptions } from "../../../lib/utils/LanguageOptions";
import { headerLinks } from "../../../lib/utils/HeaderLinks";
import { setSidebarAction } from "../../../store/actions/AppComponentsActions/setSidebarAction";
import Link from "next/link";

const HomeSidebar = () => {
	const { t, i18n } = useTranslation("index");

	const { openSidebar } = useAppSelector((state) => state.appComponents);
	const [buttonElement, setButtonElement] = useState<HTMLElement | null>(null);
	const openMenuLanguage = Boolean(buttonElement);
	const dispatch = useAppDispatch();
	const navRef = useRef<HTMLDivElement>(null);
	const closeSidebar = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
		if (!navRef.current?.contains(e.target as Node)) {
			dispatch(setSidebarAction(false));
		}
	};

	const handleCloseMenuLanguage = (lang: string) => {
		changeLanguage(lang);
		setButtonElement(null);
	};
	return (
		<div
			className="fixed top-0 left-0 w-full bg-black-opacity h-full z-20 shadow-md transition-all"
			style={{
				opacity: openSidebar ? "1" : "0",
				transform: openSidebar ? "translatex(0)" : "translateX(-100%)",
			}}
			onClick={closeSidebar}>
			<div
				className="w-9/12 p-7 bg-white shadow-md h-full max-w-xs flex flex-col justify-between"
				ref={navRef}>
				<nav className="grid gap-5 h-fit">
					<div className="flex items-center justify-between">
						<h1 className="font-extrabold">{t("home.sidebar.title")}</h1>
						<IconButton
							aria-label="Close"
							onClick={() => dispatch(setSidebarAction(false))}>
							<CloseIcon />
						</IconButton>
					</div>
					<ul className="list-none">
						<li className="">
							<Link href="/">
								<a className="no-underline text-black py-2 cursor-pointer hover:text-accent transition-all block">
									{t("home.sidebar.options.home")}
								</a>
							</Link>
						</li>
						<li className="py-2 cursor-pointer hover:text-accent transition-all">
							<Link href="/tutorials">
								<a className="no-underline text-black py-2 cursor-pointer hover:text-accent transition-all block">
									{t("home.sidebar.options.tutorials")}
								</a>
							</Link>
						</li>
						<li className="py-2 cursor-pointer hover:text-accent transition-all">
							<Link href="/projects">
								<a className="no-underline text-black py-2 cursor-pointer hover:text-accent transition-all block">
									{t("home.sidebar.options.projects")}
								</a>
							</Link>
						</li>
						<li className="py-2 cursor-pointer hover:text-accent transition-all">
							<Link href="/contact">
								<a className="no-underline text-black py-2 cursor-pointer hover:text-accent transition-all block">
									{t("home.sidebar.options.contact")}
								</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="grid gap-5 justify-start">
					<CustomButton
						variant="text"
						className="flex gap-3 w-fit"
						onClick={(e: any) => {
							setButtonElement(e.currentTarget);
						}}>
						{languageOptions.map(({ Icon, label, id }, index) => {
							const selected = id === i18n.language;
							if (selected)
								return (
									<div className="flex gap-3 items-center" key={index}>
										<Icon className="w-5 h-5" />
										{label}
									</div>
								);
						})}
					</CustomButton>
					<Menu
						open={openMenuLanguage}
						anchorEl={buttonElement}
						onClose={() => setButtonElement(null)}>
						{languageOptions.map(({ Icon, label, id }, index) => {
							return (
								<MenuItem
									key={index}
									onClick={() => {
										handleCloseMenuLanguage(id);
									}}>
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
										<Icon className="text-black fill-current w-5 h-5" />
									</IconButton>
								</Tooltip>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSidebar;
