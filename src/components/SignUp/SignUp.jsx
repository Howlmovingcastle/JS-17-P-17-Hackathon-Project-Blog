import { Button } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../Sign In/img/icon.svg";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
          <h1 style={{ color: "#06A67E" }}>Create account</h1>
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
