import React, { useState } from "react";
import "./login_form.css";
import TextEntry from "../Common/Text Entry/text_entry";
import Button from "../Common/Button/simple_button";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login clicked", { username, password });
    if (onLogin) onLogin({ username, password });
  };

  const handleSignup = () => {
    console.log("Sign up clicked");
  };

  return (
    <div className="login_form">
      <TextEntry placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <TextEntry placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button label="Login" onClick={handleLogin} />
      <Button label="Sign Up" onClick={handleSignup} />
    </div>
  );
};

export default LoginForm;
