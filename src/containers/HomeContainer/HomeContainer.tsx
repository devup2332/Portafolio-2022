import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeContainer = () => {
  const { t } = useTranslation("index");
  return (
    <div className="h-screen flex justify-center items-center font-Commissioner bg-primary">
      <div className="text-white grid gap-5 w-10/12">
        <h1 className="text-center text-4xl font-bold">{t("home.title")}</h1>
        <p className="text-sm text-center leading-5">{t("home.description")}</p>
        <Button
          className="justify-self-center"
          variant="contained"
          color="secondary"
        >
          {t("home.button")}
        </Button>
      </div>
    </div>
  );
};
export default HomeContainer;
