import Head from "next/head";
import { HomeHeader, HomeSidebar } from "../../components/organisms";

interface HomeTemplateProps {
  children: JSX.Element;
  title: string;
}

const HomeTemplate = ({ children, title }: HomeTemplateProps) => {
  return (
    <div className="h-full font-Commissioner">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-full">
        <HomeHeader />
        {children}
      </div>
      <HomeSidebar />
    </div>
  );
};

export default HomeTemplate;
