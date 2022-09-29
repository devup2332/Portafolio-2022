import Head from "next/head";
import { HomeHeader, HomeSidebar } from "../../components/organisms";

interface HomeTemplateProps {
  children: JSX.Element;
  title: string;
}

const HomeTemplate = ({ children, title }: HomeTemplateProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <HomeHeader />
        {children}
      </div>
      <HomeSidebar />
    </div>
  );
};

export default HomeTemplate;
