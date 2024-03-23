import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome To GeChat!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Sign in With Google
        </div>

        <br />
        <br />

        <div className="login-button facebook">
          <FacebookOutlined /> Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;