import { Button } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import logo from "./img/icon.svg";
const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="mine">
      <div className="signin-wrapper">
        <div className="rightbar-wrapper">
          <div className="rightbar-content">
            <img src={logo} alt="logo" style={{ width: "130px" }} />
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
          <h1 style={{ color: "#06A67E" }}>Sign In</h1>
          <input
            id="outlined-basic"
            placeholder="Email"
            //   onChange={(e) => setEmail(e.target.value)}
            //   value={email}
          />
          <input
            id="outlined-basic"
            placeholder="Password"
            //   onChange={(e) => setPassword(e.target.value)}
            //   value={password}
          />
          <input
            id="outlined-basic"
            placeholder="Confirm password"
            //   onChange={(e) => setPassword(e.target.value)}
            //   value={password}
          />

          <button
            variant="contained"
            className="signin-btn"

            //   onClick={() => handleLogin(email, password, navigate)}
          >
            Log In
          </button>
          {/* эти стили в signup.css */}
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

export default SignIn;
