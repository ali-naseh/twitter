import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../store/user-context";
import Button from "../Button";

import classes from "./Header.module.css";

const Header = () => {
  const userCtx = useContext(UserContext);

  const loggedInUser = userCtx.loggedInUser;

  const logoutHandler = () => {
    userCtx.logUserOut();
  };

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">Twitter</Link>
      </div>
      <nav>
        <ul>
          {!loggedInUser && (
            <li>
              <Link to="/login">SignIn</Link>
            </li>
          )}
          {!loggedInUser && (
            <li>
              <Link to="/register">SignUp</Link>
            </li>
          )}
          {loggedInUser && (
            <li>
              <Button onClick={logoutHandler}>Log Out</Button>
            </li>
          )}

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
