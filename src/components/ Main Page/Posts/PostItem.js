import React, { useContext } from "react";
import Card from "../../UI/Card";

import classes from "./PostItem.module.css";
import UserContext from "../../../store/user-context";
import PostsContext from "../../../store/posts-context";

const PostItem = (prop) => {
  const userCtx = useContext(UserContext);
  const loggedInUser = userCtx.loggedInUser;
  const postsCtx = useContext(PostsContext);

  const showDeleteButton = prop.post.userName === loggedInUser.userName;

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
        <div>
          <small>{prop.post.datePosted}</small>
          {showDeleteButton && (
            <button onClick={() => postsCtx.deletePost(prop.post)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
export default PostItem;
