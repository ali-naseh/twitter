import React from "react";
import Card from "../UI/Card";

import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <>
      {" "}
      <Card>
        <div className={classes.user}>
          <img src={"images/person.png"} alt="" />
          <div>
            <h3>test user</h3>
            <p>test.user</p>
          </div>
        </div>
        <div className={classes.content}>
          <p>
            content of the post jsut some more text to fill the lines content of
            the post jsut some more text to fill the lines content of the post
          </p>
          <small>02/03/2023-7:45AM</small>
        </div>
      </Card>
      <Card>
        <div className={classes.user}>
          <img src={"images/person.png"} alt="" />
          <div>
            <h3>test user</h3>
            <p>test.user</p>
          </div>
        </div>
        <div className={classes.content}>
          <p>
            content of the post jsut some more text to fill the lines ttttttttt
          </p>
          <small>02/03/2023-7:45AM</small>
        </div>
      </Card>
      <Card>
        <div className={classes.user}>
          <img src={"images/person.png"} alt="" />
          <div>
            <h3>test user</h3>
            <p>test.user</p>
          </div>
        </div>
        <div className={classes.content}>
          <p>
            content of the post jsut some more text to fill the lines ttttttttt
          </p>
          <small>02/03/2023-7:45AM</small>
        </div>
      </Card>
    </>
  );
};

export default Posts;
