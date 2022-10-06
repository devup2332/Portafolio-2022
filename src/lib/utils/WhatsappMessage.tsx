import { verifyMobile } from "./VerifyIsMobile";

export const whatsappMessage = (t: (code: string) => string, phone: number) => {
  const message = t("home.header.whatsapp.message");
  const isMobile = verifyMobile();
  let url = isMobile
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message
      )}`;

  return url;
};
