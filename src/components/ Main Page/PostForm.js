import React from "react";

import Button from '../UI/Button'

import classes from "./PostForm.module.css";

const PostForm = () => {
  return (
    <form className={classes.form}>
      <input type="text" placeholder="write your post" />
      <Button type="submit">post</Button>
    </form>
  );
};

export default PostForm;
