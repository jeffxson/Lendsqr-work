import React, { useState } from "react";
import "../styles/login.scss";
import login_pic from "../images/sign-in.png";
import { logo } from "../images/svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };
  return (
    <div className="login-container">
      <div className="first-box">
        <div className="logo1">{logo} </div>

        <img src={login_pic} alt="login" />
      </div>
      <div className="second-box">
        <div>
          <h3>
            <b> Welcome</b>
          </h3>
          <form onSubmit={submitHandler}>
            <div className="text1">Enter details to login.</div>
            <input type="email" placeholder="Email" name="email" required />
            <div className="passwordbox">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
              />
              <span onClick={handlePassword}>
                <button className="passwordbutton">
                  <b>{showPassword ? "HIDE" : "SHOW"} </b>
                </button>
              </span>
            </div>
            <div className="passwordbutton1">
              <b>FORGOT PASSWORD? </b>
            </div>

            <button type="submit" className="login-button">
              <b> LOG IN</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
