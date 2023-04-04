import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

// eslint-disable-next-line
// const COLOR="#0bd2f5";

const Header = () => {
  return (
    <header className={classes.header}>
      <div><Link to="/">Twitter</Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/login">SignIn</Link>
          </li>
          <li>
            <Link to="/register">SignUp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
