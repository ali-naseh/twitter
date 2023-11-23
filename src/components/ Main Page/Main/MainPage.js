import React, { useContext } from "react";

import classes from "./MainPage.module.css";
import PostForm from "../Posts/PostForm";
import Posts from "../Posts/Posts";
import PostsContext from "../../../store/posts-context";

const MainPage = () => {
  const postCtx = useContext(PostsContext);

  const posts = postCtx.posts;

  const newPostHandler = (post) => {
    postCtx.addPost(post);
  };

  return (
    <div className={classes.main}>
      <PostForm onAdd={newPostHandler} />
      <Posts posts={posts} />
    </div>
  );
};

export default MainPage;
