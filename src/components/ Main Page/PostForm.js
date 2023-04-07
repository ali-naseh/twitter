import React, { useContext, useRef } from "react";
import UserContext from "../../store/user-context";

import Button from "../UI/Button";

import classes from "./PostForm.module.css";
import { useNavigate } from "react-router-dom";

const PostForm = (props) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const postRef = useRef();
  const currentUser = userCtx.loggedInUser;

  const addPostHandler = (e) => {
    e.preventDefault();

    if (currentUser) {
      const enteredPost = postRef.current.value;
      const currentDate = new Date();
      const now =
        currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear() +
        "-" +
        (currentDate.getHours() > 12
          ? currentDate.getHours() - 12
          : currentDate.getHours()) +
        ":" +
        currentDate.getMinutes() +
        (currentDate.getHours() > 12 ? "PM" : "AM");

      const newPost = {
        id: Math.random(),
        user: currentUser.name,
        userName: currentUser.userName,
        postContent: enteredPost,
        datePosted: now,
      };

      postRef.current.value = "";

      props.onAdd(newPost);
    } else {
      navigate("/login");
    }
  };

  return (
    <form className={classes.form} onSubmit={addPostHandler}>
      <input type="text" placeholder="write your post" ref={postRef} />
      <Button type="submit">post</Button>
    </form>
  );
};

export default PostForm;
