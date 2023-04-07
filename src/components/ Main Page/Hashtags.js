import React from "react";
import classes from "./Hashtags.module.css";

const hashTags = [
  "new_trend",
  "test_hashtag",
  "React",
  "4Tech",
  "new_trend",
  "test_hashtag",
  "React",
  "4Tech",
];
const HashtagLists = () => {
  return (
    <div className={classes.rightSidebar}>
      <h2 className={classes.hashtags}>Trend Hashtags</h2>
      {hashTags.map((item, index) => (
        <div key={index} className={classes.hashtagParent}>
          <div>
            <img src={"images/hashtag.png"} alt="" />
            <h3>{item}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HashtagLists;
