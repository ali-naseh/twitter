import React from "react";
import Header from "./Header";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.layout}>{props.children}</main>
    </>
  );
};

export default Layout;
