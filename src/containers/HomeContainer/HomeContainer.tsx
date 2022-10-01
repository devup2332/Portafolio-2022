import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/atoms/CustomButton/CustomButton";
import { HomeVector } from "../../components/atoms/vectors";

const HomeContainer = () => {
  const router = useRouter();
  const { t } = useTranslation("index");
  return (
    <div className="h-screen flex justify-center items-center font-Commissioner">
      <div className="flex items-center w-10/12 max-w-md lg:max-w-8xl lg:gap-10 2xl:gap-70">
        <div className="text-white grid gap-5 lg:gap-12 ">
          <h1 className="text-center text-4xl font-bold opacity-0 lg:text-6xl lg:text-left 2xl:text-8xl animation-entrance-left">
            {t("home.title")}
          </h1>
          <p className="text-sm text-center leading-6 lg:text-left opacity-0 lg:leading-7 2xl:text-lg 3xl:w-9/12 3xl:leading-8 animation-entrance-right">
            {t("home.description")}
          </p>
          <CustomButton
            className="justify-self-center font-bold lg:justify-self-start 2xl:text-base lg:py-3 lg:px-12 opacity-0 animation-entrance-bottom"
            variant="contained"
            color="secondary"
            onClick={() => {
              router.push("projects");
            }}
          >
            {t("home.button")}
          </CustomButton>
        </div>
        <div
          className="hidden lg:block w-full max-w-2xl animation-entrance-right opacity-0 "
          style={{ animationDelay: "3s" }}
        >
          <HomeVector />
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
