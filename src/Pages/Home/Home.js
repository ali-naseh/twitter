import React from "react";

import HashtagLists from "../../components/ Main Page/Hashtags";
import PostForm from "../../components/ Main Page/PostForm";
import Posts from "../../components/ Main Page/Posts";
import Container from "../../components/UI/Container";
import Divider from "../../components/UI/Divider";

const Home = () => {
  return (
    <Container>
      <HashtagLists />
      <Divider />
      <main>
        <PostForm/>
        <Posts />
      </main>
    </Container>
  );
};

export default Home;
