import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Sign In/img/icon.svg";
import { useAuthContext } from "../../contexts/authContext";
import { Alert } from "@mui/material";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuthContext();
  const navigate = useNavigate();

  function handleForgotPassword() {
    forgotPassword(email, navigate);
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
          <h1 className="signin-up">Change password</h1>
          <p style={{ color: "#06A67E" }}>
            Please enter your email address. We will send you an email to reset
            your password
          </p>
          <input
            id="outlined-basic"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
              onClick={() => handleForgotPassword()}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
