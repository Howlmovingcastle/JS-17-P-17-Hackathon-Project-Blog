import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Sign In/img/icon.svg";
import { useAuthContext } from "../../contexts/authContext";

const Activate = () => {
  const { activateAcc } = useAuthContext();
  const [email, setEmail] = useState("");
  const [activate, setActivate] = useState("");

  function handelActivate() {
    activateAcc(email, activate);
  }
  return (
    <div>
      <div className="signin-wrapper">
        <div className="rightbar-wrapper">
          <div className="rightbar-content">
            <img src={logo} alt="logo" style={{ width: "130px" }} />
            <h1>Welcome!</h1>
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
          <h1 className="signin-up">Activate account</h1>
          <input
            id="outlined-basic"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            id="outlined-basic"
            placeholder="Code"
            onChange={(e) => setActivate(e.target.value)}
            value={activate}
          />
          <button
            variant="contained"
            className="signin-btn"
            onClick={() => handelActivate()}
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activate;
