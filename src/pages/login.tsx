import React, { useState } from "react";
import "../styles/login.scss";
import login_pic from "../images/sign-in.png";
import { logo } from "../images/svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <div className="first-box">
        <div className="logo1">{logo} </div>

        <img src={login_pic} alt="login image" />
      </div>
      <div className="second-box">
        <h3>
          <b> Welcome</b>
        </h3>
        <div className="text1">Enter details to login.</div>
        <input type="email" placeholder="Email" />
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span onClick={handlePassword}>
            <button className="passwordbutton">
              <b>{showPassword ? "HIDE" : "SHOW"} </b>
            </button>
          </span>
        </label>
        <div className="passwordbutton1">
          {" "}
          <b>FORGOT PASSWORD? </b>
        </div>
        <button className="login-button">
          {" "}
          <b> LOG IN</b>
        </button>
      </div>
    </div>
  );
};

export default Login;
