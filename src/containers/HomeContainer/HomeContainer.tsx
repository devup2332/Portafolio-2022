import { useTranslation } from "react-i18next";
import CustomButton from "../../components/atoms/CustomButton/CustomButton";

const HomeContainer = () => {
  const { t } = useTranslation("index");
  return (
    <div className="h-screen flex justify-center items-center font-Commissioner bg-primary">
      <div className="text-white grid gap-5 w-10/12 max-w-md">
        <h1 className="text-center text-4xl font-bold">{t("home.title")}</h1>
        <p className="text-sm text-center leading-6">{t("home.description")}</p>
        <CustomButton
          className="justify-self-center bg-primary"
          variant="contained"
          color="secondary"
        >
          {t("home.button")}
        </CustomButton>
      </div>
    </div>
  );
};
export default HomeContainer;
