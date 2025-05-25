import React from "react";
import "./login.css";
import LoginForm from "../../components/Login_Form/login_form";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;