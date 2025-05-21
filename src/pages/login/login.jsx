import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Login_Form/login_form";

const Login = () => {
    return (
      <div className="login_background">
        <LoginForm/>
      </div>
    );
  };
  
  export default Login;