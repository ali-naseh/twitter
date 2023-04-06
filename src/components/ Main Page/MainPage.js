import React from "react";

import classes from "./MainPage.module.css";
import PostForm from "./PostForm";
import Posts from "./Posts";

const MainPage = () => {
  return (
    <div className={classes.main}>
      <PostForm />
      <Posts />
    </div>
  );
};

export default MainPage;
