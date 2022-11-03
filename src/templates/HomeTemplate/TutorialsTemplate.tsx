import Head from "next/head";
import TutorialsHeader from "../../components/organisms/TutorialsHeader/TutorialsHeader";
import TutorialsSidebar from "../../components/organisms/TutorialsSidebar/TutorialsSidebar";

interface TutorialsTemplateProps {
  children: JSX.Element;
  title: string;
}

const TutorialsTemplate = ({ children, title }: TutorialsTemplateProps) => {
  return (
    <div className="bg-primary">
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <TutorialsHeader />
        {children}
      </div>
      <TutorialsSidebar />
    </div>
  );
};

export default TutorialsTemplate;
