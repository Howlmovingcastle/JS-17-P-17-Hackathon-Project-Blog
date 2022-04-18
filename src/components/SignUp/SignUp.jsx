import { Button } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../Sign In/img/icon.svg";
import { useAuthContext } from "../../contexts/authContext";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { signUp } = useAuthContext();
  // console.log(email, password);
  const location = useLocation();
  const navigate = useNavigate();

  function handleRegister(email, password, confirmPassword, name, lastName) {
    signUp({ email, password, confirmPassword, name, lastName }, navigate);
  }
  return (
    <div>
      <div className="signin-wrapper">
        <div className="rightbar-wrapper">
          <div className="rightbar-content">
            <img src={logo} alt="logo" style={{ width: "130px" }} />
            <h1>Hello here!</h1>
            <h4>
              In Blogger, you can write about anything, such as the weather, the
              latest news or interesting ideas. Register – and you will find out
              why a huge number of users have chosen this service.
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
          <h1 className="signin-up">Create account</h1>
          <input
            id="outlined-basic"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            id="outlined-basic"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            id="outlined-basic"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <input
            id="outlined-basic"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            id="outlined-basic"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <button
            variant="contained"
            className="signin-btn"
            onClick={() =>
              handleRegister(email, password, confirmPassword, name, lastName)
            }
          >
            Sign Up
          </button>
          {location.pathname == "/signup" ? (
            <div className="go-to-login-content">
              <p>Have you already been registered?</p>
              <button
                id="go-to-login-btn"
                variant="outlined"
                onClick={() => navigate("/signin")}
              >
                Log in
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
