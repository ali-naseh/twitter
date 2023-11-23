import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./store/user-context";
import { PostsContextProvider } from "./store/posts-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <PostsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostsContextProvider>
  </UserContextProvider>
);
