import type { NextPage } from "next";
import HomeContainer from "../containers/HomeContainer/HomeContainer";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

const Home: NextPage = () => {
  return (
    <HomeTemplate title="Home">
      <HomeContainer />
    </HomeTemplate>
  );
};

export default Home;
