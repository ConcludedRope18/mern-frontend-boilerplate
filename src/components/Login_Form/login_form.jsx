import React from "react";
import "./login_form.css";
import TextEntry from "../Text Entry/text_entry";
import Button from "../Button/simple_button";

const LoginForm = () => {
  return (
    <div className="login_form">
      <TextEntry placeholder="Username" />
      <TextEntry placeholder="Password" type="password" />
      <Button label="Login" />
      <Button label="Sign Up" />
    </div>
  );
};

export default LoginForm;