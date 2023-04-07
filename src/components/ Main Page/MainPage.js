import React, { useState } from "react";

import classes from "./MainPage.module.css";
import PostForm from "./PostForm";
import Posts from "./Posts";

const DUMMY_POSTS = [
  {
    id: "p1",
    user: "Test User",
    userName: "test.user",
    postContent:
      "content of the post jsut some more text to fill the lines content of the post jsut some more text to fill the lines content of the post",
    datePosted: "02/03/2023-7:45AM",
  },
  {
    id: "p2",
    user: "Bob Ras",
    userName: "bob.ras1",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Faucibus scelerisque eleifend donec pretium vulputate sapien nec",
    datePosted: "04/05/2022-9:29AM",
  },
  {
    id: "p3",
    user: "Tom Odell",
    userName: "tom.official",
    postContent: `Interdum velit euismod in pellentesque massa. 
    Volutpat odio facilisis mauris sit amet. Odio tempor orci dapibus ultrices in iaculis nunc. 
    A diam sollicitudin tempor id. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. 
    Duis ut diam quam nulla. Nulla facilisi etiam dignissim diam. 
    Mattis pellentesque id nibh tortor id aliquet lectus.
    Arcu cursus euismod quis viverra. Aliquam sem et tortor consequat id porta nibh. 
    Tempor orci dapibus ultrices in iaculis nunc. Pellentesque eu tincidunt tortor aliquam nulla.`,
    datePosted: "25/03/2022-11:18PM",
  },
];

const MainPage = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  const newPostHandler = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <div className={classes.main}>
      <PostForm onAdd={newPostHandler} />
      <Posts posts={posts} />
    </div>
  );
};

export default MainPage;
