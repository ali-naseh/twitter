import React, { createContext, useState, useEffect } from "react";

const PostsContext = createContext({
  posts: [],
  addPost: (post) => {},
  deletePost: (post) => {},
});

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

const initialValue = () => {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : DUMMY_POSTS;
};

export const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPostHandler = (newPost) => {
    setPosts((prevPosts) => {
      return prevPosts.concat(newPost);
    });
  };

  const deletePostHandler = (post) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((p) => p.id !== post.id);
    });
  };

  const context = {
    posts: posts,
    addPost: addPostHandler,
    deletePost: deletePostHandler,
  };

  return (
    <PostsContext.Provider value={context}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
