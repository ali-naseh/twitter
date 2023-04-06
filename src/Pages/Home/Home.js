import React from "react";

import HashtagLists from "../../components/ Main Page/Hashtags";
import MainPage from "../../components/ Main Page/MainPage";
import Container from "../../components/UI/Container";
import Divider from "../../components/UI/Divider";

const Home = () => {
  return (
    <Container>
      <HashtagLists />
      <Divider />

      <MainPage />
    </Container>
  );
};

export default Home;
