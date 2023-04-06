import React from "react";
import Card from "../UI/Card";

import classes from "./Posts.module.css";

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

const Posts = () => {
  return (
    <>
      {DUMMY_POSTS.map((post) => (
        <Card>
          <div className={classes.user}>
            <img src={"images/person.png"} alt="" />
            <div>
              <h3>{post.user}</h3>
              <p>{post.userName}</p>
            </div>
          </div>
          <div className={classes.content}>
            <p>{post.postContent}</p>
            <small>{post.datePosted}</small>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Posts;
