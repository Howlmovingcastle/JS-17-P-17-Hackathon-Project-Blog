import { Button } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Sign In/img/icon.svg";
import { useAuthContext } from "../../contexts/authContext";

const LoginNewPass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { loginNewPass } = useAuthContext();
  // console.log(email, password)

  function handleLoginNewPass(newPassword, email) {
    loginNewPass(newPassword, email, navigate);
  }

  return (
    <div className="mine">
      <div className="signin-wrapper">
        <div className="rightbar-wrapper">
          <div className="rightbar-content">
            <img src={logo} alt="logo" id="logo-signup" />
            <h1>Welcome back!</h1>
            <h4>
              Don't let the memories fade. You can store thousands of posts,
              photos and more in Blogger for free.
            </h4>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "50vw",
            margin: "20vh auto",
            textAlign: "center",
          }}
        >
          <h1 className="signin-up">
            Sign in <br />
            with new password
          </h1>
          <input
            id="outlined-basic"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            id="outlined-basic"
            placeholder="New password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <button
              variant="contained"
              className="signin-btn"
              onClick={() => handleLoginNewPass()}
            >
              Log in
            </button>
          </div>
          {location.pathname == "/signin" ? (
            <div className="go-to-login-content">
              <p>Don't have an account?</p>
              <button
                id="go-to-login-btn"
                variant="outlined"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginNewPass;
