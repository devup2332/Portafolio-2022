import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SendedEmailVector from "../../components/atoms/vectors/SendedEmailVector";

const SendedEmailContainer = () => {
  const { t } = useTranslation("index");
  return (
    <div className="flex justify-center text-white items-center h-screen bg-primary">
      <div className="w-8/12 grid max-w-md border-2 border-red-400 gap-6">
        <div className="grid gap-6">
          <SendedEmailVector className="w-full h-full" />
          <h1 className="text-center text-2xl">{t("sendedMessage.title")} </h1>
        </div>
        <Link href="/">
          <Button color="secondary" variant="contained" className="w-full">
            {t("sendedMessage.button")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SendedEmailContainer;
