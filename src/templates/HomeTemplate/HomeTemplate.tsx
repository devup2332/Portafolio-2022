import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../../components/atoms/Loader/Loader";
import { HomeHeader, HomeSidebar } from "../../components/organisms";

interface HomeTemplateProps {
  children: JSX.Element;
  title: string;
}

const HomeTemplate = ({ children, title }: HomeTemplateProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="h-full font-Commissioner">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-full bg-primary overflow-y-auto">
        <HomeHeader />
        {children}
      </div>
      <HomeSidebar />
    </div>
  );
};

export default HomeTemplate;
