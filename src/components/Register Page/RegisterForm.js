import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/user-context";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const userCtx = useContext(UserContext);
  const emailRef = useRef();
  const nameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  const submitFromHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredUserName = userNameRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredPasswordAgain = passwordAgainRef.current.value;

    if (enteredPassword !== enteredPasswordAgain) {
      setError("Password fields are not same.");
    } else {
      if (
        enteredEmail.includes("@") &&
        userCtx.users.find((user) => user.email === enteredEmail)
      ) {
        setError("This email has been used before.");
      } else {
        if (
          enteredEmail.includes("@") &&
          enteredPassword.trim().length >= 4 &&
          enteredPasswordAgain.trim().length >= 4
        ) {
          // hash password for safty later
          setError("");
          userCtx.addUser({
            id: Math.random(),
            name: enteredName,
            userName: enteredUserName,
            email: enteredEmail,
            password: enteredPassword,
          });
          navigate("/login");
        }
      }
    }
  };

  return (
    <Card className={classes.center}>
      {error && <div className={classes.error}>{error}</div>}
      <form className={classes.form} onSubmit={submitFromHandler}>
        <div>
          <input type="text" placeholder="Name" ref={nameRef} />
        </div>
        <div>
          <input type="text" placeholder="userName" ref={userNameRef} />
        </div>
        <div>
          <input type="email" placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password Again"
            ref={passwordAgainRef}
          />
        </div>
        <div>
          <Button type="submit">SignUp</Button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
