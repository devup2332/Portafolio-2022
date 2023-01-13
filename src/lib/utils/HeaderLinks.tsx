import { TFunction } from "react-i18next";
import {
	IconGithub,
	IconLinkedin,
	IconWhatsapp,
} from "../../components/atoms/icons";
import { whatsappMessage } from "./WhatsappMessage";

const linkedinLink = "https://www.linkedin.com/in/drojascam";
const githubProfile = "https://github.com/devup2332";

export const headerLinks = [
	{
		Icon: IconWhatsapp,
		label: "Whatsapp",
		onClick: (t: TFunction<"index", undefined>) => {
			const url = whatsappMessage(t, 51976469908);
			window.open(url);
		},
	},
	{
		Icon: IconLinkedin,
		label: "Linkedin",

		onClick: () => {
			console.log("Here");
			window.open(linkedinLink);
		},
	},
	{
		Icon: IconGithub,
		label: "Github",
		onClick: () => {
			window.open(githubProfile);
		},
	},
];
