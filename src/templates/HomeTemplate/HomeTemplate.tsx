import Head from "next/head";

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
      <div>{children}</div>
    </div>
  );
};

export default HomeTemplate;
