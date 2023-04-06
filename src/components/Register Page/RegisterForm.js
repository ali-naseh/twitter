import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <Card className={classes.center}>
      <form className={classes.form}>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" placeholder="Password Again" />
        </div>
        <div>
          <Button>submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
