import { TFunction } from "i18next";
import { verifyMobile } from "./VerifyIsMobile";

export const whatsappMessage = (t: TFunction, phone: number) => {
	const message = t("home.header.whatsapp.message");
	const isMobile = verifyMobile();
	const encoded = encodeURIComponent(message);
	const url = isMobile
		? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
		: `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;

	return url;
};
