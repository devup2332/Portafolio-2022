import Head from "next/head";
import { useEffect } from "react";
import Loader from "../../components/atoms/Loader/Loader";
import { HomeHeader, HomeSidebar } from "../../components/organisms";
import { setLoadingAction } from "../../store/actions/AppComponentsActions/setLoadingAction";
import { useAppDispatch, useAppSelector } from "../../store/store";

interface HomeTemplateProps {
  children: JSX.Element;
  title: string;
}

const HomeTemplate = ({ children, title }: HomeTemplateProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.appComponents);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingAction(false));
    }, 3000);
  }, []);

  return (
    <div className="h-full font-Commissioner">
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="h-full bg-primary overflow-y-auto">
            <HomeHeader />
            {children}
          </div>
          <HomeSidebar />
        </>
      )}
    </div>
  );
};

export default HomeTemplate;
