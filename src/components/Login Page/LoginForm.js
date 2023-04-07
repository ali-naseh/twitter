import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/user-context";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [error, setError] = useState("");
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitFormhandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const user = userCtx.findUser(enteredEmail);

    if (user && user.password === enteredPassword) {
      userCtx.logUserIn(user);
      navigate("/");
    } else {
      setError("Email or password is wrong");
    }
  };

  return (
    <Card className={classes.center}>
      {error && <div className={classes.error}>{error}</div>}
      <form className={classes.form} onSubmit={submitFormhandler}>
        <div>
          <input type="email" placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <Button type="submit">LogIn</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
