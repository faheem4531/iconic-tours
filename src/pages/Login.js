import React from "react";
import "../styles/Login.css";

import { Input, Button } from "../components";
import iconicLogo from "../assets/svgs/iconic-logo.svg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-wrapper">
          <img src={iconicLogo} alt="logo" />
        </div>
        <div className="login-title">Log In</div>
        <Input label="Email" placeholder="Emai" type="email" />
        <Input label="Password" placeholder="Password" type="password" />
        <div className="login-button-wrapper">
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
