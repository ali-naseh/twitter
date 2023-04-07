import React from "react";
import Card from "../UI/Card";

import classes from "./PostItem.module.css";

const PostItem = (prop) => {
  return (
    <Card>
      <div className={classes.user}>
        <img src={"images/person.png"} alt="" />
        <div>
          <h3>{prop.post.user}</h3>
          <p>{prop.post.userName}</p>
        </div>
      </div>
      <div className={classes.content}>
        <p>{prop.post.postContent}</p>
        <small>{prop.post.datePosted}</small>
      </div>
    </Card>
  );
};
export default PostItem;
