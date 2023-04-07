import React from "react";

import PostItem from "./PostItem";

const Posts = (prop) => {
  return (
    <>
      {prop.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
