import { useTranslation } from "react-i18next";
import CustomButton from "../../components/atoms/CustomButton/CustomButton";
import { HomeVector } from "../../components/atoms/vectors";

const HomeContainer = () => {
  const { t } = useTranslation("index");
  return (
    <div className="h-screen flex justify-center items-center font-Commissioner bg-primary">
      <div className="flex items-center w-10/12 max-w-md lg:max-w-8xl lg:gap-10 2xl:gap-70">
        <div className="text-white grid gap-5 lg:gap-12">
          <h1 className="text-center text-4xl font-bold lg:text-6xl lg:text-left 2xl:text-8xl">{t("home.title")}</h1>
          <p className="text-sm text-center leading-6 lg:text-left lg:leading-7 2xl:text-lg 3xl:w-9/12 3xl:leading-8">
            {t("home.description")}
          </p>
          <CustomButton
            className="justify-self-center font-bold bg-primary lg:justify-self-start 2xl:text-base lg:py-3 lg:px-12"
            variant="contained"
            color="secondary"
          >
            {t("home.button")}
          </CustomButton>
        </div>
        <div className="hidden lg:block w-full max-w-2xl">
          <HomeVector />
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
